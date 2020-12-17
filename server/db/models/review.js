const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  userId: {},
  communityId: {},
  listingId: {},
  message: {}
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
