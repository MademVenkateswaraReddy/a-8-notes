const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl')
const auth = require('../middlewares/auth')

router.post(`/register`, userCtrl.registerUser)

router.post(`/login`, userCtrl.loginUser)

router.get(`/verify`, auth, userCtrl.verifiedToken)

module.exports = router