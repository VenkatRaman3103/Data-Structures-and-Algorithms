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
};

export default config;
