const mongoose = require('mongoose');

const RSSFeedSchema = new mongoose.Schema({
  url: { type: String, required: true, unique: true },
  title: { type: String },
  description: { type: String },
  items: [
    {
      title: String,
      link: String,
      pubDate: Date,
      content: String,
      keywords: [String],
    },
  ],
});

module.exports = mongoose.model('RSSFeed', RSSFeedSchema);