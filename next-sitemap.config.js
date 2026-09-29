/** @type {import('next-sitemap').IConfig} */

const dev = process.env.NODE_ENV !== 'production';

module.exports = {
  siteUrl: dev ? 'http://localhost:3000' : 'https://www.maranathagroup.com.au',
  generateRobotsTxt: false, // robots.txt is hand-maintained in /public — don't overwrite it
  exclude: ['/api/*', '/accounts', '/accounts/*', '/404'],
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (config, path) => {
    // Give the homepage and the services hub top priority; everything
    // else falls back to the default above.
    const priority = path === '/' ? 1.0 : path === '/services/' ? 0.9 : config.priority;
    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
