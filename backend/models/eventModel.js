const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: String,
  data: String,
  location: String,
  link: String,
  image: String,
  source: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Event', EventSchema);
