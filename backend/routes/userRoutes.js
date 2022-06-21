const express = require('express');
const { registerUser, authUser, allUsers } = require('../controllers/userControllers');
const project = require('../middleware/authMiddleware');
const router = express.Router()

router.route('/').post(registerUser).get(project, allUsers)
router.post('/login', authUser)

module.exports = router