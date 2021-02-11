const express = require('express')
const dotenv = require('dotenv');
//Route files

const userNutriticsInfo = require("./src/routes/NutritionRouter")
dotenv.config({path: './config/config.env'});

const app = express();
//Mount Routers
const baseMapUrl = '/api/user-nutritics'

app.use(baseMapUrl, userNutriticsInfo)
const PORT = process.env.PORT;

app.listen(PORT, console.log(`server listening on ${process.env.PORT} mode on port ${PORT}`));