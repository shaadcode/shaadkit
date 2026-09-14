import antfu from '@antfu/eslint-config'

const ignoreFiles = [
  './README.md',
  '.storybook',
  'node_modules/**/*',
]

export default antfu(
  {
    ignores: ignoreFiles,
    nextjs: true,
    react: true,

  },
  {
    rules: {
      'dot-notation': 'off',
      'ts/ban-ts-comment': 'off',
    },
  },
)
