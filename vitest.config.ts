import solid from 'vite-plugin-solid'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [solid(), tsconfigPaths()],
  resolve: {
    conditions: ['development', 'browser']
  },
  test: {
    coverage: {
      enabled: true,
      exclude: ['*.{cjs,js}']
    },
    environment: 'jsdom',
    globals: true,
    include: ['./test/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    setupFiles: './test/setup-tests.ts'
  }
})
