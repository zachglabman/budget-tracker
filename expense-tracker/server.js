// dependencies for node server
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
// connecting to db, stored in external file
const dbConnection = require('./config/db');
//setting up process path to config file
dotenv.config({ path: './config/config.env' });

dbConnection();

const port = process.env.PORT || 5000;


const transactions = require('./routes/transactions');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/zach/transactions', transactions);
// replacing static node.js folder/file serving from wiki
app.listen(port, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`));