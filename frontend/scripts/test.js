process.env.NODE_ENV = 'test';
process.env.PUBLIC_URL = '';

// Load environment variables from .env file. Surpress warnings using silent
// if this file is missing. dotenv will never modify any environment variables
// that have already been set.
// https://github.com/motdotla/dotenv
require('dotenv').config({silent: true});

const jest = require('jest');
const argv = process.argv.slice(2);

// starts jsdom so that rendering in tests is possible (e.g., enzyme needs this for the mount() or shallow() function)
if (!argv.includes('--env=jsdom')) {
    argv.push('--env=jsdom');
}

// use "npm test -- --watch" for watch mode.
// to run coverage: "npm test -- --coverage"

/*
// Watch unless on CI
if (!process.env.CI) {
  argv.push('--watch');
}
*/


jest.run(argv);
