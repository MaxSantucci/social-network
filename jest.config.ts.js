module.exports = {
   preset: 'ts-jest',
   testEnvironment: 'jsdom',
   moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
   },
   setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
   testMatch: ['**/__tests__/**/*.test.(ts|tsx|js|jsx)'],
};
