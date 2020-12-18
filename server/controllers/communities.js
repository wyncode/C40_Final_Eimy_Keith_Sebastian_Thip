const Community = require('../db/models/community');

exports.getSpecificCommunity = async (req, res) => {
  try {
    const community = await Community.findOne({ id: req.params.id });
    res.json(community);
  } catch (e) {
    res.json({ error: e.toString() });
  }
};
