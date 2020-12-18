const router = require('express').Router(),
  { isAdmin } = require('../../middleware/authorization/'),
  {
    createReview,
    getSpecificReview,
    updateReview,
    deleteReview,
    fetchAllReviews
  } = require('../../controllers/reviews');

router.get('/', isAdmin(), fetchAllReviews);

router.post('/', createReview);

router.get('/:id', getSpecificReview);

router.patch('/:id', updateReview);

router.delete('/:id', deleteReview);

module.exports = router;
