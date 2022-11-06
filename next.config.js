const withLess = require('next-with-less');
/** @type {import('next').NextConfig} */
module.exports = withLess({
  lessLoaderOptions: {
    lessOptions: {
      modifyVars: {
        // Add variables here
        'font-family': 'Quicksand, sans-serif',
      },
    },
  },
  compiler: {
    styledComponents: true,
  },
});
