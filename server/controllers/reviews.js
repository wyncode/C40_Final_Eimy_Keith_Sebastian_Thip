const Review = require('../db/models/review');

exports.fetchAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};

exports.getSpecificReview = async (req, res) => res.json(req.user);

//AUTHENTICATED ROUTES
exports.createReview = async (req, res) => {
  const { name } = req.user;
  const { comment } = req.body;
  try {
    const review = new Review({
      name,
      comment
    });
    res.status(201).json(user);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

exports.updateReview = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['comment'];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).send({ error: 'invalid updates!' });
  try {
    updates.forEach((update) => (req.review[update] = req.body[update]));
    await req.review.save();
    res.json(req.review);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

exports.deleteReview = async (req, res) => {
  try {
    await req.user.remove();
    res.clearCookie('jwt');
    res.json({ message: 'review deleted' });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};
