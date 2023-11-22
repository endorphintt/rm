const express = require('express')
const router = express.Router()
const appointmentController = require('../controllers/appointmentController')

router.get('/', appointmentController.getAllAppointments)
router.post('/', appointmentController.addAppointment)
router.delete('/:id', appointmentController.deleteAppointmentById)

module.exports = router
