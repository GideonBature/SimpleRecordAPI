const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const port = 8080;

const app = express();

app.use(express.json());
app.use('/api', userRoutes);

mongoose.connect('mongodb://localhost:27017/userDB')
  .then(() => {
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
  })
  .catch(error => {
    console.error(error);
  });