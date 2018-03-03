'use strict'

const types = require('./types')

const questions = [{
  type: 'list',
  name: 'type',
  message: "Select the type of change you're committing:\n",
  choices: types
}, {
  type: 'input',
  name: 'message',
  message: 'Write an imperative tense description of your change:\n'
}]

const formatters = [
  message => message.trim(),
  message => message.endsWith('.') && !message.endsWith('..')
    ? message.substring(0, message.length - 1)
    : message,
  message => message.endsWith('..') && !message.endsWith('...')
    ? message.substring(0, message.length - 2)
    : message,
  message => message[0].toUpperCase() !== message[0]
    ? `${message[0].toUpperCase()}${message.substring(1)}`
    : message
]

const format = ({ message, type }) => {
  if (!message) throw new Error('You need to fill in a commit message')

  const prefix = `${type}: `
  const formattedMessage = formatters.reduce((acc, formatter) => formatter(acc), message)

  return prefix + formattedMessage
}

module.exports = {
  prompter(cz, commit) {
    return cz.prompt(questions)
      .then(format)
      .then(commit)
  }
}
