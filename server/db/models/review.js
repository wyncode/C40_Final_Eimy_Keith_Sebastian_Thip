const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  communityId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Community'
  },
  listingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Listing'
  },
  message: {
    type: String
  }
});

//user can rate and leave reviews for the community/neighborhood,
//as well as listing services

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
