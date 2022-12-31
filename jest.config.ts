export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@router(.*)$': '<rootDir>/src/router/$1',
    '^@constants(.*)$': '<rootDir>/src/constants/$1',
    '^@assets(.*)$': '<rootDir>/src/assets/$1',
    '^@pages(.*)$': '<rootDir>/src/pages/$1',
    '^@components(.*)$': '<rootDir>/src/components/$1',
    '^@store(.*)$': '<rootDir>/src/store/$1',
    '^@hooks(.*)$': '<rootDir>/src/hooks/$1',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}
