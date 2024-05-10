const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');


// create express app
const app = express();

app.use(cors( {
  origin: '*',
  methods: ['GET', 'POST', 'DELETE', 'PUT'],
  allowedHeaders: ['Content-Type', 'Authorization'],
} ));

app.use(express.json());
app.use('/api', userRoutes);

// connect to database
connectDB();