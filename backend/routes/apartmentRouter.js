const express = require('express')
const router = express.Router()
const apartmentController = require('../controllers/apartmentController')

router.get('/', apartmentController.getAllApartments)
router.get('/:id', apartmentController.getApartmentById)
router.post('/', apartmentController.addApartment)
router.delete('/:id', apartmentController.deleteApartmentById)

module.exports = router
