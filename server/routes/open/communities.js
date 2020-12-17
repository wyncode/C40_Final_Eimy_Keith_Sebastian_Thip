const router = require('express').Router(),
  { getSpecificCommunity } = require('../../controllers/communities');

router.get('/:id', getSpecificCommunity);

module.exports = router;
