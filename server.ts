import nutritionRouter from "./src/routes/NutritionRouter";

const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan');
const connectDB= require("./src/db/config/MongoConfig");
const exceptionHandler = require('./src/middleware/error')
import mongoSanitize from 'express-mongo-sanitize';

// Load env vars
dotenv.config({path: './config/config.env'});

// Connect to database
connectDB();

const app = express();

app.use(exceptionHandler);

app.use(morgan('dev'));

//Body Parser
app.use(express.json());

// Sanitize data
app.use(mongoSanitize());


//Mount Routers
app.use('/api', nutritionRouter);

const PORT = process.env.PORT;

const server = app.listen(
    PORT,
    console.log(`server listening on ${process.env.PORT} mode on port ${PORT}`)
);

/*// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    // Close server & exit process
    // server.close(() => process.exit(1));
});*/
