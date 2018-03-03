# cz-delta

I felt I needed a ricer commitizen config for my personal projects, so I
made this, using Greek letters I chose semi-arbitrarily so it looks like
I actually know something. 🕶

## Installation

Install `cz-cli` and `cz-delta` globally:

```bash
$ npm i -g commitizen cz-delta
```

Then add `cz-delta` to your commitizen config inside `package.json`:

```json
{
  "name": "my-fancy-package",
  "version": "100.10.1",

  "config": {
    "commitizen": {
      "path": "cz-delta"
    }
  }
}
```

And you're done 🕶

## Usage

Simply run `git cz` when committing in your project, and choose the type
of change you've made:

| Type of change                                   | Prefix |
| ------------------------------------------------ | ------ |
| A breaking change (major version bump)           | Δ      |
| A non-breaking addition (minor version bump)     | δ      |
| Smaller change, bug fix etc (patch version bump) | μ      |
| A change that wouldn't trigger a version bump    | θ      |

Write a short description (preferably less than 72 characters since it
looks way better on Github for example--but I'll leave this up to you),
and you're done 🕶
