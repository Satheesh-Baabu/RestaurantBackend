const express = require('express')
const { signin, login, dashboard } = require('../controllers/dashboardController')
const verifyToken = require('../middleware/verifyToken')

const router = express.Router()

router.post('/login', login)
router.post('/signin', signin)
router.post('/dashboard',verifyToken,dashboard)

module.exports = router;