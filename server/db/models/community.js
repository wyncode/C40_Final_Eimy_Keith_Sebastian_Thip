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
    ],
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
      }
    ]
  },
  {
    timestamps: true
  }
);

//nothing user can do but view and review (which is taken care of in the review model)
//community has many house listings for sale (What do we do with this information?)

const Community = mongoose.model('Community', communitySchema);

module.exports = Community;
