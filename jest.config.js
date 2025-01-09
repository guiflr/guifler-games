module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts',
    'src/**/*.tsx',
    '!src/app/**',
    '!src/lib/resgistry.ts',
    '!src/types/**',
    '!src/styles/**',
    '!src/pages/_app.tsx',
    '!src/**/stories.tsx'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  },
  moduleNameMapper: {
    '^styled-components':
      'styled-components/dist/styled-components.browser.cjs.js',
       "@/utils/tests/helpers": "<rootDir>/src/utils/tests/helpers",
       "@/styles/theme":"<rootDir>/src/styles/theme",
       "@/components/Heading": "<rootDir>/src/components/Heading",
       "@/components/Logo": "<rootDir>/src/components/Logo",
       "@/components/Button": "<rootDir>/src/components/Button",
  },
}
