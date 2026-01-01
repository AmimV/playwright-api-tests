import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: [['html', { open: 'never' }]],
  use: {
    baseURL: 'https://dummyjson.com',
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
    },
  },
});
