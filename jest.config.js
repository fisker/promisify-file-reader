module.exports = {
  // collectCoverage: true,
  collectCoverageFrom: ['src/**/*'],
  verbose: true,
  testPathIgnorePatterns: ['.eslintrc.js'],
  testEnvironment: 'jest-environment-jsdom-fifteen',
  testEnvironmentOptions: {resources: 'usable'},
}
