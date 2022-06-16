const express = require('express');
const { chats } = require('./data/data');
const app = express()
const port = 5000 || process.env.PORT
const cors = require('cors');
require('dotenv').config()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("API is Running")
})

app.get('/api/chat', (req, res) => {
    res.send(chats)
})

app.get('/api/chat/:id', (req, res) => {
    const id = req.params.id
    const singleChat = chats.find(c => c._id === id)
    res.send(singleChat)
})

app.listen(port, () => {
    console.log(`Server Started on PORT ${port}`);
})