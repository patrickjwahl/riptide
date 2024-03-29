const path = require('path');

module.exports = {
  experimental: {
    outputStandalone: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['images.ctfassets.net']
  }
}
