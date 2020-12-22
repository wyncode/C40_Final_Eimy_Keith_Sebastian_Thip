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
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
);

//user can view, review, contact, and pay for services
//proUser can offer services availble
//line 31, does it make sense to have the ProOwner?

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
