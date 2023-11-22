const express = require('express')
const router = express.Router()
const cityController = require('../controllers/cityController')

router.get('/', cityController.getAllCities)
router.post('/', cityController.addCity)
router.delete('/:id', cityController.deleteCityById)

module.exports = router
