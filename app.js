const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use('api/users', userRoutes);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});