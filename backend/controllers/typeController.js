const { Type } = require('../models/models')

const getAllTypes = async (req, res) => {
    try {
        const types = await Type.findAll()
        res.status(200).json(types)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Помилка сервера' })
    }
}

const getTypeById = async (req, res) => {
    const { id } = req.params
    try {
        const type = await Type.findByPk(id)
        if (type) {
            res.status(200).json(type)
        } else {
            res.status(404).json({ error: 'Тип не знайдено' })
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Помилка сервера' })
    }
}

const addType = async (req, res) => {
    console.log('Отримані дані:', req.body)
    const { body } = req
    try {
        const newType = await Type.create(body)
        res.status(201).json(newType)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Помилка сервера' })
    }
}

const deleteTypeById = async (req, res) => {
    const { id } = req.params
    try {
        const type = await Type.findByPk(id)
        if (type) {
            await type.destroy()
            res.status(204).end()
        } else {
            res.status(404).json({ error: 'Тип не знайдено' })
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Помилка сервера' })
    }
}

module.exports = {
    getAllTypes,
    getTypeById,
    addType,
    deleteTypeById,
}
