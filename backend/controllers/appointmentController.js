const { Appointment } = require('../models/models')

const getAllAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.findAll()
        res.status(200).json(appointments)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Помилка сервера' })
    }
}

const getAppointmentById = async (req, res) => {
    const { id } = req.params
    try {
        const appointment = await Appointment.findByPk(id)
        if (appointment) {
            res.status(200).json(appointment)
        } else {
            res.status(404).json({ error: 'Призначення не знайдено' })
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Помилка сервера' })
    }
}

const addAppointment = async (req, res) => {
    const { body } = req
    try {
        const newAppointment = await Appointment.create(body)
        res.status(201).json(newAppointment)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Помилка сервера' })
    }
}

const deleteAppointmentById = async (req, res) => {
    const { id } = req.params
    try {
        const appointment = await Appointment.findByPk(id)
        if (appointment) {
            await appointment.destroy()
            res.status(204).end()
        } else {
            res.status(404).json({ error: 'Призначення не знайдено' })
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Помилка сервера' })
    }
}

module.exports = {
    getAllAppointments,
    getAppointmentById,
    addAppointment,
    deleteAppointmentById,
}
