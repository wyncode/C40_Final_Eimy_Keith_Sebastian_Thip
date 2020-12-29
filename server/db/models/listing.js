const mongoose = require('mongoose'),
  Review = require('./review');

const listingSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true
    },
    contactInfo: {
      name: {
        type: String
      },
      email: {
        type: String
      },
      phoneNumber: {
        type: String
      }
    },
    location: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Community'
      }
    ],
    category: {
      type: String,
      enum: ['home', 'service']
    },
    proOwner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      require: true
    }
  },
  {
    timestamps: true
  }
);

/**
 * Create a virtual relation between listing and review.
 */
listingSchema.virtual('reviews', {
  ref: Review,
  localField: '_id',
  foreignField: 'listingId'
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
