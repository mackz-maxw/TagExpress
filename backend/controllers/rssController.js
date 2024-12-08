const RSSFeed = require('../models/RSSFeed');
const rssService = require('../services/rssService');

// get all RSS feeds
const getAllFeeds = async (req, res) => {
  try {
    const feeds = await RSSFeed.find();
    res.json(feeds);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// add a new RSS feed
const addNewFeed = async (req, res) => {
  const { url } = req.body;
  try {
    const rssData = await rssService.fetchAndParseRSS(url);
    await rssService.saveOrUpdateRSSFeed(rssData);
    res.status(201).json({ message: 'RSS source added' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get a RSS feed by id
const getFeedById = async (req, res) => {
  const { id } = req.params;
  try {
    const feed = await RSSFeed.findById(id);
    if (!feed) {
      return res.status(404).json({ message: '未找到该 RSS 源' });
    }
    res.json(feed);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllFeeds,
  addNewFeed,
  getFeedById,
};