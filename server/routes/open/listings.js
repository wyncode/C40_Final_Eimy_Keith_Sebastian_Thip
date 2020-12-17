const router = require('express').Router(),
  { getSpecificListing } = require('../../controllers/reviews');

router.get('/:id', getSpecificListing);

module.exports = router;
