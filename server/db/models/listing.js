const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true
    },
    contactInfo: {
      type: Boolean,
      default: false
    },
    location: {
      type: String
    },
    category: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
