// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  preset: 'ts-jest',
  setupFilesAfterEnv: ['./tests/setupTests.ts'],
  testEnvironment: 'jsdom',
  transform: {
    "^.+\\.scss$": 'jest-scss-transform',
  },
}
