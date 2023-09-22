/** @type {import('next').NextConfig}
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

*/

// module.exports = nextConfig

// const path = require('path')
// module.exports = {
// 	trailingSlash: false,
// 	webpackDevMiddleware: config => {
// 		config.watchOptions = {
// 			poll: 1000,
// 			aggregateTimeout: 300
// 		}

// 		return config
// 	},
// 	sassOptions: {
// 		includePaths: [path.join(__dirname, 'styles')]
// 	}
// }

/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains:["test.maranathagroup.com.au"]
,    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',
        pathname: '/**',
      }
    ]
  },
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  optimizeFonts: false,
}

module.exports = nextConfig