const mongoose = require('mongoose');
const connectDB = async () => {
    const connection = await mongoose.connect(process.env.MONGO_URI_PC, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log(`MongoDB Connected: ${connection.connection.host}`);
}
module.exports = connectDB;