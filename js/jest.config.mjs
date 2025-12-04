/** @type {import('jest').Config} */
const config = {
    clearMocks: true,
    collectCoverage: false,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    testEnvironment: 'node',
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
    moduleNameMapper: {
        '^src/(.*)$': '<rootDir>/src/$1',
        // Change this path when you start a new revision round
        '^@revision/(.*)$': '<rootDir>/src/leetCode_150/00-Revision/02-revision/$1',
    },
};

export default config;
