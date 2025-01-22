/** @type {import('jest').Config} */

export default {
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/'],
  testMatch: ['**/?(*.)+(test).js'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  moduleNameMapper: {
  },
  restoreMocks: true,
  resetMocks: true,
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  transform: {
    // '^.+\\.js?$': 'ts-jest',
  },
};
