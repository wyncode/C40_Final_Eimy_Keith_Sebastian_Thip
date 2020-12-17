const mongoose = require('mongoose');

const communitySchema = new mongoose.Schema(
  {
    descrption: {
      type: String,
      required: true,
      trim: true
    },
    area: {
      type: Boolean,
      default: false
    },
    schools: {
      type: String,
      trim: true
    },
    localOpinions: {
      type: Object
    },
    localOfficials: {
      type: Object
    },
    safetyAndCrimes: {
      type: Object
    }
  },
  {
    timestamps: true
  }
);

const Community = mongoose.model('Community', communitySchema);

module.exports = Community;
