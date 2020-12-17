const mongoose = require('mongoose');

const communitySchema = new mongoose.Schema(
  {
    descrption: {
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

const Community = mongoose.model('Community', communitySchema);

module.exports = Community;
