const { Apartment } = require('../models/models')
const { v4: uuidv4 } = require('uuid')
const path = require('path')
const { Op } = require('sequelize')
const fs = require('fs')

const getAllApartments = async (req, res) => {
    try {
        const { appointmentId, typeId, citiesId } = req.query

        // Отримуємо всі квартири з врахуванням фільтрів, якщо вони надані
        const apartments = await Apartment.findAll({
            where: {
                appointmentId: appointmentId || { [Op.not]: null },
                typeId: typeId || { [Op.not]: null },
                citiesId: citiesId || { [Op.not]: null },
            },
        })

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
    try {
        let {
            namePL,
            nameEN,
            price,
            citiesId,
            typeId,
            appointmentId,
            map,
            descriptionPL,
            descriptionEN,
            square,
            rooms,
            floor,
            czynsz,
            stan,
            balkon,
            parking,
            heating,
            address,
        } = req.body

        // Отримайте файли як об'єкт, а не як об'єкт Sequelize
        const images = req.files.images

        // Генеруйте унікальне ім'я для кожного файлу та зберігайте файли в папці 'static'
        const imageNames = Array.isArray(images)
            ? images.map((image) => {
                  const fileName = uuidv4() + path.extname(image.name)
                  image.mv(path.resolve(__dirname, '..', 'static', fileName))
                  return fileName
              })
            : [images]

        // Створюйте запис у базі даних, використовуючи звичайний об'єкт
        const newApartment = await Apartment.create({
            namePL,
            nameEN,
            price,
            images: imageNames.join(','), // Зберігайте назви файлів разом, наприклад, "file1.jpg,file2.jpg"
            citiesId,
            typeId,
            appointmentId,
            map,
            descriptionPL,
            descriptionEN,
            square,
            rooms,
            floor,
            czynsz,
            stan,
            balkon,
            parking,
            heating,
            address,
        })

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
            // Отримуємо імена файлів для видалення з рядка images
            const imageNames = apartment.images
                ? apartment.images.split(',')
                : []

            // Видаляємо елемент з бази даних
            await apartment.destroy()

            // Видаляємо файли фото з сервера
            if (imageNames.length > 0) {
                const staticFolderPath = path.join(__dirname, '..', 'static')

                imageNames.forEach((imageName) => {
                    const imagePath = path.join(
                        staticFolderPath,
                        imageName.trim()
                    )

                    // Перевіряємо, чи файл існує перед видаленням
                    if (fs.existsSync(imagePath)) {
                        fs.unlinkSync(imagePath)
                    }
                })
            }

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
