const router = require('express').Router(),
  {
    getYelpAPI,
    searchYelpAPI,
    searchSchoolsAPI,
    searchRealtorAPI
  } = require('../../controllers/APIs'),
  { getRepByZipcode } = require('../../controllers/APIs');

//Yelp API
router.get('/api/yelp', getYelpAPI);
router.get('/api/search', searchYelpAPI);

//Schools API
router.get('/api/schools', searchSchoolsAPI);

//Realtor API
router.get('/api/realtor', searchRealtorAPI);

//Ciceros API

// router.get('/representatives/', getRepByZipcode);
// module.exports = router;

module.exports = router;
