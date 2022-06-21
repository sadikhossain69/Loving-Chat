const express = require('express');
const { chats } = require('./data/data');
const app = express()
const port = 5000 || process.env.PORT
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config()
const colors = require('colors')
const userRoutes = require('./routes/userRoutes');
const chatRoutes = require('./routes/chatRoutes')
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

app.use(cors())
app.use(express.json())
connectDB()

app.get('/', (req, res) => {
    res.send("API is Running")
})

app.use('/api/user', userRoutes)
app.use('/api/chat', chatRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server Started on PORT ${port}`);
})