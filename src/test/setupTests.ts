import '@testing-library/jest-dom';

// Add polyfills for TextEncoder and TextDecoder which are required by React Router DOM
global.TextEncoder = require('util').TextEncoder;
global.TextDecoder = require('util').TextDecoder;
