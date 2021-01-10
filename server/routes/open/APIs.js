const router = require('express').Router(),
  {
    getYelpAPI,
    searchYelpAPI,
    searchSchoolsAPI
  } = require('../../controllers/APIs'),
  { getRepByAPI } = require('../../controllers/APIs');

//Yelp API
router.get('/api/yelp', getYelpAPI);

router.get('/api/search', searchYelpAPI);

//Schools API
router.get('/api/schools', searchSchoolsAPI);

// Ciceros API

router.get('api/reps/', getRepByAPI);
module.exports = router;
