const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan');
const mongoConnection = require("./src/db/config/MongoConfig");
const exceptionHandler = require('./src/middleware/error')
import mongoSanitize from 'express-mongo-sanitize';

//Route files

const userNutriticsInfo = require("./src/routes/NutritionRouter");
dotenv.config({path: './config/config.env'});

mongoConnection();

const app = express();

app.use(exceptionHandler);

app.use(morgan);
//Body Parser
app.use(express.json());

// Sanitize data
app.use(mongoSanitize());

app.use(mongoSanitize());

//Mount Routers
app.use('/api/user-nutritics', userNutriticsInfo);

const PORT = process.env.PORT;

const server = app.listen(
    PORT,
    console.log(`server listening on ${process.env.PORT} mode on port ${PORT}`
    )
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    // Close server & exit process
    // server.close(() => process.exit(1));
});
