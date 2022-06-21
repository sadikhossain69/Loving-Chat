const express = require('express')
const { accessChat } = require('../controllers/chatControllers')
const project = require('../middleware/authMiddleware')
const router = express.Router()

router.route('/').post(project, accessChat)
// router.route('/').get(project, fetchChats)
// router.route('/group').post(project, createGroupChat)
// router.route('/groupremove').put(project, removeFromGroup)
// router.route('/groupadd').put(project, addToGroup)


module.exports = router