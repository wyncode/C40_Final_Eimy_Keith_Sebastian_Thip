const router = require('express').Router(),
  {
    getSpecificListing,
    fetchAllListings
  } = require('../../controllers/listings');

router.get('/:id', getSpecificListing);
router.get('/', fetchAllListings);

module.exports = router;
