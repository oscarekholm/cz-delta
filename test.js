/* eslint-env jest */

const { prompter} = require('./')
const types = require('./types')
const { value: majorChangeType } = types[0]

const prompt = input => prompter({
  prompt: async () => input
}, result => result)

for (const { name, value } of types) {
  test(`cz-delta formats "${name}" correctly`, async () => {
    const result = await prompt({ type: value, message: 'Test' })
    expect(result).toEqual(`${value}: Test`)
  })
}

test('cz-delta throws on empty message', async () => {
  await expect(prompt({ type: majorChangeType, message: '' }))
    .rejects
    .toThrow('You need to fill in a commit message')
})

test('cz-delta trims padded messages', async () => {
  const result = await prompt({ type: majorChangeType, message: 'Test ' })
  expect(result).toEqual(`${majorChangeType}: Test`)
})

test('cz-delta removes single trailing dot', async () => {
  const result = await prompt({ type: majorChangeType, message: 'Test.' })
  expect(result).toEqual(`${majorChangeType}: Test`)
})

test('cz-delta removes double trailing dots', async () => {
  const result = await prompt({ type: majorChangeType, message: 'Test..' })
  expect(result).toEqual(`${majorChangeType}: Test`)
})

test('cz-delta removes double trailing dots', async () => {
  const result = await prompt({ type: majorChangeType, message: 'Test..' })
  expect(result).toEqual(`${majorChangeType}: Test`)
})

test('cz-delta allows triple dots', async () => {
  const result = await prompt({ type: majorChangeType, message: 'Test...' })
  expect(result).toEqual(`${majorChangeType}: Test...`)
})

test('cz-delta titleizes messages', async () => {
  const result = await prompt({ type: majorChangeType, message: 'test' })
  expect(result).toEqual(`${majorChangeType}: Test`)
})
