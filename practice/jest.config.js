module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.css$': '<rootDir>/src/__mocks__/styleMock.js',
    '@/pages/(.*)': '<rootDir>/pages/$1',
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/constants/(.*)$': '<rootDir>/constants/$1',
    '^@/layouts/(.*)$': '<rootDir>/layouts/$1',
    '^@/utils/(.*)$': '<rootDir>/utils/$1',
    '^@/hooks/(.*)$': '<rootDir>/hooks/$1',
    '^@/__tests__/(.*)$': '<rootDir>/__tests__/$1',
    '^@/__mocks__/(.*)$': '<rootDir>/__mocks__/$1',
    '^@/services/(.*)$': '<rootDir>/services/$1',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/*.stories.tsx',
    '!**/*.props.ts',
    '!**/node_modules/**',
    '!<rootDir>/out/**',
    '!<rootDir>/.next/**',
    '!<rootDir>/*.config.js',
    '!<rootDir>/coverage/**',
    '!<rootDir>/types/**',
    '!<rootDir>/styles/**',
    '!<rootDir>/constants/**',
    '!<rootDir>/.storybook/**',
    '!<rootDir>/.eslintrc.js',
    '!<rootDir>/pages/_document.tsx',
    '!<rootDir>/pages/_app.tsx',
    '!<rootDir>/pages/api/**',
    '!**/*fileSystem.ts',
  ],
};
