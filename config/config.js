const dotenv = require('dotenv');

// loading environment variables
dotenv.config();

const port = process.env.PORT;
const db =  process.env.MONGODB_URI;

module.exports = { port, db };