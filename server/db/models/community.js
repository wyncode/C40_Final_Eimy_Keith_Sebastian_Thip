const mongoose = require('mongoose');

const communitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    area: [
      {
        type: Object
      }
    ],
    schools: [
      {
        type: Object
      }
    ],
    localOpinions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
      }
    ],
    localOfficials: [
      {
        type: Object
      }
    ],
    safetyAndCrimes: [
      {
        type: Object
      }
    ]
  },
  {
    timestamps: true
  }
);

/**
 * Create a virtual relation between community and listing; community and review.
 */
communitySchema.virtual('listings', {
  ref: 'Listing',
  localField: '_id',
  foreignField: 'location'
});

communitySchema.virtual('reviews', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'communityId'
});

const Community = mongoose.model('Community', communitySchema);

module.exports = Community;
