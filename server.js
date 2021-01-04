require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectToDatabase } = require('./config/database');
const authRoute = require('./routes/authRoute');

//Initialize application
const app = express();

//Connection to database
connectToDatabase();

//Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/auth', authRoute);

//Running server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
