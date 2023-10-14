const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true, });
        console.log(`Connected to Mongodb Database ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error in Mongodb ${error}`);
    }
}

module.exports = connectDB;