const Community = require('../db/models/community');

exports.getSpecificCommunity = async (req, res) => {
  try {
    const community = await Community.findOne({ id: req.params.id });
    res.json(community);
  } catch (e) {
    res.json({ error: e.toString() });
  }
};

exports.getMapKey = (req, res) => {
  try {
    res.json({ key: process.env.GOOGLE_MAPS_KEY });
  } catch (error) {
    console.log(error);
  }
};
