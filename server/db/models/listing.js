const mongoose = require('mongoose');

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
    location: {
      type: String
    },
    category: {
      type: String,
      enum: ['home', 'service']
    }
  },
  {
    timestamps: true
  }
);

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
