const mongoose = require('mongoose');
const connectDB = async () => {
    const connection = await mongoose.connect(process.env.MONGO_URI_MAC, {useNewUrlParser: true, useUnifiedTopology: true});
    console.log("MongoDB connected ")
}

module.exports = connectDB;

