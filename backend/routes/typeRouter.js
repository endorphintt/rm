const express = require('express')
const router = express.Router()
const typeController = require('../controllers/typeController')

router.get('/', typeController.getAllTypes)
router.post('/', typeController.addType)
router.delete('/:id', typeController.deleteTypeById)

module.exports = router
