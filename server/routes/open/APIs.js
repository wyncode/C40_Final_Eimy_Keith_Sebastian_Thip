const router = require('express').Router(),
  { getYelpAPI, searchYelpAPI } = require('../../controllers/APIs');

router.get('/api/yelp', getYelpAPI);

router.get('/api/search', searchYelpAPI);

module.exports = router;
