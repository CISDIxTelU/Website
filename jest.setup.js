
// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom

import '@testing-library/jest-dom/extend-expect'
import '@fastly/performance-observer-polyfill/polyfill'
// import 'jest-canvas-mock'

// PerformanceObserver is now available globally!
const observer = new PerformanceObserver((list) => {});
observer.observe({entryTypes: ['resource']});