const router = require('express').Router(),
  { isAdmin } = require('../../middleware/authorization/'),
  {
    createReview,
    getAllReviews,
    getSpecificReview,
    updateReview,
    deleteReview,
    fetchAllReviews
  } = require('../../controllers/reviews');

router.get('/all', isAdmin(), fetchAllReviews);

router.post('/', createReview);

router.get('/:id', getSpecificReview);

router.get('/', getAllReviews);

router.patch('/:id', updateReview);

router.delete('/:id', deleteReview);

module.exports = router;
