const router = require('express').Router(),
  { getSpecificListing } = require('../../controllers/listings');

router.get('/:id', getSpecificListing);

module.exports = router;
