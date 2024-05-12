const dotenv = require('dotenv');

// loading environment variables
dotenv.config();

const port = process.env.PORT || 4000;
const db =  process.env.MONGODB_URI;
const secret = process.env.JWT_SECRET;

module.exports = { port, db, secret };