const router = require('express').Router(),
  { getYelpAPI, searchYelpAPI } = require('../../controllers/APIs'),
  { getRepByZipcode } = require('../../controllers/APIs');

//Yelp API
router.get('/api/yelp', getYelpAPI);

router.get('/api/search', searchYelpAPI);

//Ciceros API

// router.get('/representatives/', getRepByZipcode);
// module.exports = router;

module.exports = router;
