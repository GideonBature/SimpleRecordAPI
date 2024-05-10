const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const  authRoutes = require('./routes/authRoutes');
const { port } = require('./config/config');

// create express app
const app = express();

app.use(express.json());

app.use(cors( {
  origin: '*',
  methods: ['GET', 'POST', 'DELETE', 'PUT'],
  allowedHeaders: ['Content-Type', 'Authorization'],
} ));

app.use('/api', userRoutes);
app.use('/api', authRoutes);

// connect to database
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error(error);
    throw error;
  });
