require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const typeController = require('./controllers/typeController')
const path = require('path')

const PORT = process.env.PORT || 5005

const app = express()
app.use(express.json())
app.use(cors())
app.use(fileUpload({}))

app.use(express.static(path.resolve(__dirname, 'static')))
app.use('/api', router)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()
