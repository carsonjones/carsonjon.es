const config = {
  site: {
    prefix: '/site',
    title: 'Carson Jones',
    titleShort: "Carson's Website",
    titleAlt: "Carson Jones's Portfolio & Blog",
    logo: '/images/logo-1024.png',
    url: 'https://carsonjon.es',
    description: 'Pesonal website of Carson Jones. Thoughts on product, design, and building.',
    rss: '/rss.xml',
  },
  analytics: {
    facebookID: 'FB',
    googleAnalyticsID: 'UA-XXX-X',
  },
  content: {
    postDefaultCategoryID: 'general',
    dateFromFormat: 'YYYY-MM-DD',
    dateFormat: 'DD/MM/YYYY',
  },
  user: {
    name: 'Carson Jones',
    email: 'me@carsonjon.es',
    twitter: '@carsonjonze',
    location: 'Dallas, TX',
    avatar: 'XXX',
    description: "Currently leading product and design at Arcade. Doin' it the best I can ✌️",
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/carsonjones/site',
      },
      {
        label: 'Twitter',
        url: 'https://twitter.com/carsonjonze',
      },
      {
        label: 'Email',
        url: 'mailto:me@carsonjon.es',
      }
    ],
  },
  manifest: {
    themeColor: '#c62828',
    backgroundColor: '#e0e0e0',
  },
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.site.prefix === '/') {
  config.site.prefix = '';
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.site.prefix = `/${config.site.prefix.replace(/^\/|\/$/g, '')}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.site.url.substr(-1) === '/')
  config.site.url = config.site.url.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.site.rss && config.site.rss[0] !== '/')
  config.site.rss = `/${config.site.rss}`;

module.exports = config;
