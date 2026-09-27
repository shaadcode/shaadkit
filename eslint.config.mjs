import antfu from '@antfu/eslint-config';

const ignoreFiles = [
  './README.md',
  'node_modules/**/*',
  '.arkenv',
];

export default antfu(
  {
    ignores: ignoreFiles,
    nextjs: true,
    react: true,
    stylistic: { semi: true },
    formatters: { css: true },
  },
  {
    rules: {
      'dot-notation': 'off',
      'ts/ban-ts-comment': 'off',
    },
  },
);
