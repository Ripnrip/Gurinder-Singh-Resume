/**
 * 🎭 Playwright Configuration - Icon Verification Test Suite
 *
 * "Configuration magic, tests we configure,
 * Screenshots and assertions, quality we ensure."
 *
 * - The Digital Metaphor Maestro
 */

module.exports = {
  testDir: './tests',
  outputDir: './snapshot-tests/playwright-results',
  
  // Test timeout
  timeout: 30000,
  expect: {
    timeout: 10000
  },
  
  // Run tests in parallel (but limit to avoid server overload)
  workers: 2,
  
  // Retry failed tests
  retries: 1,
  
  // Reporter configuration
  reporter: [
    ['list'],
    ['html', { outputFolder: './snapshot-tests/playwright-report' }],
    ['json', { outputFile: './snapshot-tests/playwright-results/results.json' }]
  ],
  
  // Shared test context
  use: {
    // Browser settings
    headless: false, // Set to true for CI/CD
    viewport: { width: 1920, height: 1080 },
    
    // Screenshot settings
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    
    // Navigation settings
    navigationTimeout: 30000,
    actionTimeout: 10000,
    
    // Base URL (local server)
    baseURL: 'http://localhost:8080',
    
    // Trace for debugging
    trace: 'on-first-retry'
  },
  
  // Projects for different browsers
  projects: [
    {
      name: 'chromium',
      use: { 
        ...require('@playwright/test').devices['Desktop Chrome'],
        headless: false
      },
    },
  ],
  
  // Web server configuration (optional - we're using external server)
  // webServer: {
  //   command: 'node scripts/serve-and-screenshot.js',
  //   port: 8080,
  //   reuseExistingServer: !process.env.CI,
  // },
};

