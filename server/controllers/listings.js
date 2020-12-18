const Listing = require('../db/models/listing');

exports.getSpecificListing = async (req, res) => {
  try {
    const listing = await Listing.findOne({ id: req.params.id });
    res.json(listing);
  } catch (e) {
    res.json({ error: e.toString() });
  }
};

exports.fetchAllListings = async (req, res) => {
  try {
    const listings = await Listing.find();
    res.json(listings);
  } catch (e) {
    res.json({ error: e.toString() });
  }
};
