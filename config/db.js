const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();

const connectDB = async () => {
    try {
        await mongoose.connect(config.db);
        console.log('MongoDB connected');
        app.listen(config.port, () => {
            console.log(`Server listening on port ${config.port}`);
        });
    } catch (error) {
        console.error(error);
    }
};

module.exports = connectDB;