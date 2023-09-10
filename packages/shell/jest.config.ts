/** @type {import('ts-jest').JestConfigWithTsJest} */

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  testMatch: ['**/__test__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  moduleNameMapper: {
    '@core/(.*)': '<rootDir>/src/core/$1',
    '@infrastructure/(.*)': '<rootDir>/src/infrastructure/$1',
    '@presentation/(.*)': '<rootDir>/src/presentation/$1',
    'src/(.*)': '<rootDir>/src/$1',
    '\\.(css|less)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|png)$': '<rootDir>/src/__test__/__mocks__/fileMock.js',
    // '\\.svg$': '<rootDir>/src/__test__/__mocks__/svg.js',
  },
  moduleDirectories: ['node_modules', '<rootDir>/src/'],
  collectCoverage: true,
  coverageReporters: ['text'],
  transformIgnorePatterns: ['node_modules/(?!@mui)/'],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__test__/transformers/fileTransformers.js',
    '^.+\\.svg$': 'jest-transformer-svg',
    // '\\.svg$': '<rootDir>/src/__test__/transformers/fileTransformers.js',
  },
}
