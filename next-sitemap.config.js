/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://autorail.dev",
  generateRobotsTxt: false, // We manage robots.txt manually in /public
  generateIndexSitemap: false,
  outDir: "public",
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/icon.svg", "/icon.png", "/apple-icon.png"],
  transform: async (config, path) => {
    // Higher priority for key pages
    const highPriority = ["/", "/unerr", "/necroma"]
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: highPriority.includes(path) ? 1.0 : config.priority,
      lastmod: new Date().toISOString(),
    }
  },
}
