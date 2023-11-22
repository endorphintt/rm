const { Review } = require('../models/models')

const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.findAll()
        res.status(200).json(reviews)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Помилка сервера' })
    }
}

const addReview = async (req, res) => {
    const { body } = req
    try {
        const newReview = await Review.create(body)
        res.status(201).json(newReview)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Помилка сервера' })
    }
}

const deleteReviewById = async (req, res) => {
    const { id } = req.params
    try {
        const review = await Review.findByPk(id)
        if (review) {
            await review.destroy()
            res.status(204).end()
        } else {
            res.status(404).json({ error: 'Відгук не знайдено' })
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Помилка сервера' })
    }
}

module.exports = {
    getAllReviews,
    addReview,
    deleteReviewById,
}
