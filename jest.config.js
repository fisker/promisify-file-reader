module.exports = {
  // collectCoverage: true,
  collectCoverageFrom: ['src/**/*'],
  verbose: true,
  // testRegex: ['__tests__/*.js'],
  // testPathIgnorePatterns: ['/shared/'],
  testEnvironment: 'jest-environment-jsdom-thirteen',
  testEnvironmentOptions: {resources: 'usable'},
}
