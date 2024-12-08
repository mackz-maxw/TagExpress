const express = require('express');
const router = express.Router();
const rssController = require('../controllers/rssController');

// get all RSS feeds
router.get('/', rssController.getAllFeeds);

// add a new RSS feed
router.post('/', rssController.addNewFeed);

// get a RSS feed by id
router.get('/:id', rssController.getFeedById);

module.exports = router;