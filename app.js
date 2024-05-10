const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

require('dotenv').config();

const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use('/api', userRoutes);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
  })
  .catch(error => {
    console.error(error);
  });