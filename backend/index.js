require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const path = require('path')
const axios = require('axios')

const PORT = process.env.PORT || 5435
const app = express()
app.use(express.json())

// Дозволити всі походження
app.use(
    cors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    })
)

app.use(fileUpload({}))
app.use(express.static(path.resolve(__dirname, 'static')))
app.use('/api', router)

app.use('/proxy', async (req, res) => {
    const apiUrl = `https://app.esticrm.pl/apiClient${req.path}${
        req._parsedUrl.search || ''
    }`
    console.log(`Forwarding request to: ${apiUrl}`) // Додано лог для перевірки URL
    try {
        const response = await axios.get(apiUrl)
        res.json(response.data)
    } catch (error) {
        console.error('Error fetching data:', error)
        res.status(error.response ? error.response.status : 500).send(
            error.message
        )
    }
})

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()
