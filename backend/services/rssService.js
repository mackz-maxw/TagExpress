const RSSParser = require('rss-parser');
const natural = require('natural');
const RSSFeed = require('../models/RSSFeed');

const parser = new RSSParser();
const tokenizer = new natural.WordTokenizer();

// extract the keywords from the text
const extractKeywords = (text) => {
  const tokens = tokenizer.tokenize(text);
  // return the first 5 tokens
  return tokens.slice(0, 5);
};

// fetch and parse the RSS feed
const fetchAndParseRSS = async (url) => {
  const feed = await parser.parseURL(url);
  const items = feed.items.map((item) => ({
    title: item.title,
    link: item.link,
    pubDate: item.pubDate,
    content: item.contentSnippet,
    keywords: extractKeywords(item.contentSnippet),
  }));

  return {
    url,
    title: feed.title,
    description: feed.description,
    items,
  };
};

// save or update the RSS feed in the database
const saveOrUpdateRSSFeed = async (rssData) => {
  const existingFeed = await RSSFeed.findOne({ url: rssData.url });
  if (existingFeed) {
    existingFeed.title = rssData.title;
    existingFeed.description = rssData.description;
    existingFeed.items = rssData.items;
    await existingFeed.save();
  } else {
    const newFeed = new RSSFeed(rssData);
    await newFeed.save();
  }
};

module.exports = {
  fetchAndParseRSS,
  saveOrUpdateRSSFeed,
};