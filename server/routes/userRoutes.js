const { Router } = require('express')

const userCreate = require('../controllers/userControllers.js')

const router = Router();


router.post('/register', userCreate)
    //router.put('/update/:id', userUpdate)

module.exports = router