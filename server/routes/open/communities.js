const router = require('express').Router(),
  { getSpecificCommunity } = require('../../controllers/reviews');

router.get('/:id', getSpecificCommunity);

module.exports = router;
