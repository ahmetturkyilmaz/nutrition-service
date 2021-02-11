const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan');
const mongoConnection = require("./src/db/config/MongoConfig");

//Route files

const userNutriticsInfo = require("./src/routes/NutritionRouter");
dotenv.config({path: './config/config.env'});

mongoConnection();

const app = express();

app.use(morgan);
app.use(express.json());

//Mount Routers
const baseMapUrl = '/api/user-nutritics'
app.use(baseMapUrl, userNutriticsInfo);

const PORT = process.env.PORT;

app.listen(PORT, console.log(`server listening on ${process.env.PORT} mode on port ${PORT}`));
