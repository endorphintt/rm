const express = require('express')
const router = express.Router()
const reviewController = require('../controllers/reviewController')

router.get('/', reviewController.getAllReviews)
router.post('/', reviewController.addReview)
router.delete('/:id', reviewController.deleteReviewById)

module.exports = router
