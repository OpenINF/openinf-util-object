'use strict';

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'deps', 'chore', 'style']],
    'header-max-length': [2, 'always', 50],
    'subject-case': [0, 'always', ['lower-case', 'sentence-case', 'start-case']],
  },
}
