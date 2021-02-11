const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://root:example@192.168.0.19:27017/?authSource=admin", {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;