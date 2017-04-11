var metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var handlebars = require('handlebars');
var collections = require('metalsmith-collections');
var permalinks = require('metalsmith-permalinks');
var serve = require('metalsmith-serve');
var watch = require('metalsmith-watch');
var redirect = require('metalsmith-redirect');
var feed = require('metalsmith-feed');
var tags = require('metalsmith-tags');
var drafts = require('metalsmith-drafts');

handlebars.registerHelper('moment', require('helper-moment'));

metalsmith(__dirname)
  .metadata({
    site: {
      url: 'http://localhost:8081/',
      name: 'currychern',
      title: 'Curry Chern – Software Engineer',
      description: 'I\'m Curry Chern, an Austin-based software engineer who enjoys emerging technologies, sustainable agriculture, local food, music, travel, and nature.',
      keywords: ['Curry Chern', 'currychern'],
      author: 'Curry Chern'
    }
  })
  .source('./src')
  .destination('./public')
  .use(drafts())
  .use(collections({
    posts: {
      pattern: 'posts/**/*.md',
      sortBy: 'date',
      reverse: true,
      metadata: {
        name: 'Posts'
      }
    },
  }))
  .use(markdown())
  .use(permalinks({
    relative: false,
  }))
  .use(tags({
    handle: 'tags',
    path:'topics/:tag/index.html',
    layout:'./topic.html',
    sortBy: 'date',
    reverse: true,
    skipMetadata: false,
    metadataKey: "category",
    slug: {mode: 'rfc3986'}
  }))
  .use(feed({
    collection: 'posts',
    destination: 'blog/rss.xml'
  }))
  .use(layouts({
    engine: 'handlebars',
    directory: './layouts',
    default: 'article.html',
    pattern: ["*/*/*html","*/*html","*html"],
    partials: {
      header: 'partials/header',
      footer: 'partials/footer'
    }
  }))
  .use(serve({
    port: 8081,
    verbose: true
  }))
  .use(watch({
    paths: {
      "${source}/**/*": true,
      "layouts/**/*": "**/*",
    }
  }))
  .use(redirect({
	   '/posts': '/blog',
	}))
  .build(function (err) {
    if (err) {
      console.log(err);
    }
    else {
      console.log('Website built!');
    }
  });
