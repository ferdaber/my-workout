function getMockFile(path) {
  return `<rootDir>/src/__mocks__/${path}.mock.js`
}

module.exports = {
  modulePaths: ['src'],
  setupFiles: ['<rootDir>/jest.setup.js'],
  testURL: 'https://localhost',
  moduleNameMapper: {},
}
