const { City } = require('../models/models')

const getAllCities = async (req, res) => {
    try {
        const cities = await City.findAll()
        res.status(200).json(cities)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Помилка сервера' })
    }
}

const getCityById = async (req, res) => {
    const { id } = req.params
    try {
        const city = await City.findByPk(id)
        if (city) {
            res.status(200).json(city)
        } else {
            res.status(404).json({ error: 'Місто не знайдено' })
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Помилка сервера' })
    }
}

const addCity = async (req, res) => {
    const { body } = req
    try {
        const newCity = await City.create(body)
        res.status(201).json(newCity)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Помилка сервера' })
    }
}

const deleteCityById = async (req, res) => {
    const { id } = req.params
    try {
        const city = await City.findByPk(id)
        if (city) {
            await city.destroy()
            res.status(204).end()
        } else {
            res.status(404).json({ error: 'Місто не знайдено' })
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Помилка сервера' })
    }
}

module.exports = {
    getAllCities,
    getCityById,
    addCity,
    deleteCityById,
}
