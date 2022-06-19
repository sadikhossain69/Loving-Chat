const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // serverApi: ServerApiVersion.v1,
            // userFindAndModify: true
        });

        console.log(`MongoDb Connected: ${conn.connection.host}`.yellow.bold);
    }
    catch (error) {
        console.log(`Error: ${error.message}`.red.bold); 
        process.exit()
    }
}

module.exports = connectDB