const express = require('express')
const router = express.Router()

const reviewRouter = require('./reviewRouter')
const userRouter = require('./userRouter')
const cityRouter = require('./cityRouter')
const appointmentRouter = require('./appointmentRouter')
const typeRouter = require('./typeRouter')
const postRouter = require('./postRouter')
const apartmentRouter = require('./apartmentRouter')

router.use('/reviews', reviewRouter)
router.use('/users', userRouter)
router.use('/cities', cityRouter)
router.use('/appointments', appointmentRouter)
router.use('/types', typeRouter)
router.use('/posts', postRouter)
router.use('/apartments', apartmentRouter)

module.exports = router
