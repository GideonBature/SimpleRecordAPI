const express = require('express');
const mongoose = require('mongoose');
const { db } = require('./config');

const app = express();

const connectDB = async () => {
    try {
        await mongoose.connect(db);
        console.log('MongoDB connected');
    } catch (error) {
        console.error(error);
        throw error;
    }
};

module.exports = connectDB;