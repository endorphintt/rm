const { Apartment } = require('../models/models')

const getAllApartments = async (req, res) => {
    try {
        const apartments = await Apartment.findAll()
        res.status(200).json(apartments)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'server error' })
    }
}

const getApartmentById = async (req, res) => {
    const { id } = req.params
    try {
        const apartment = await Apartment.findByPk(id)
        if (apartment) {
            res.status(200).json(apartment)
        } else {
            res.status(404).json({ error: 'apartment not found' })
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'server error' })
    }
}

const addApartment = async (req, res) => {
    const { body } = req
    try {
        const newApartment = await Apartment.create(body)
        res.status(201).json(newApartment)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'server error' })
    }
}

const deleteApartmentById = async (req, res) => {
    const { id } = req.params
    try {
        const apartment = await Apartment.findByPk(id)
        if (apartment) {
            await apartment.destroy()
            res.status(204).end()
        } else {
            res.status(404).json({ error: 'apart not found' })
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'server error' })
    }
}

module.exports = {
    getAllApartments,
    getApartmentById,
    addApartment,
    deleteApartmentById,
}
