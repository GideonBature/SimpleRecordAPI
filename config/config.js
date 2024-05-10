const dotenv = require('dotenv');

// loading environment variables
dotenv.config();

const config = {
    port: process.env.PORT || 3000,
    db: process.env.MONGODB_URI
}

module.exports = config;