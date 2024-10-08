const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['tests'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testEnvironmentOptions: {
    NODE_ENV: 'test',
  },
  verbose: true,
};

export default config;