const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  testEnvironment: 'jsdom',
};

module.exports = async () => ({
  ...(await createJestConfig(customJestConfig)()),
  setupFiles: ['<rootDir>/jest.setup.js'],

  collectCoverageFrom: [
    './src/app/api/**/*.{js,jsx,ts,tsx}',
    './src/app/helper/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './components/**/**/**/*.{js,jsx,ts,tsx}',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],
  coverageReporters: ['text', 'text-summary'],
  testMatch: [
    '**/tests/**/?(*.)+(spec|test).[jt]s?(x)',
    '**/helpers/**/?(*.)+(test).[jt]s?(x)',
  ],
  transformIgnorePatterns: ['node_modules/(?!(swiper|ssr-window|dom7)/)'],
  globals: {
    TextEncoder: require('util').TextEncoder,
    TextDecoder: require('util').TextDecoder,
  },
});
