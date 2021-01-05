const router = require('express').Router(),
  {
    getSpecificCommunity,
    getMapKey
  } = require('../../controllers/communities');

router.get('/map', getMapKey);
router.get('/:id', getSpecificCommunity);

module.exports = router;
