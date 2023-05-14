module.exports = {
  ...require('config/jest-next'),
  displayName: 'Next-app Tests',
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
  },
}
