const dotenv = require('dotenv');

// loading environment variables
dotenv.config();

const port = process.env.PORT || 3000;
const db =  process.env.MONGODB_URI || 'mongodb+srv://GideonBature:2014/1/52201Ea@userdb.v9xecup.mongodb.net/?retryWrites=true&w=majority&appName=userDB'
;
const secret = process.env.JWT_SECRET || '2014/1/52201Ea03121997GiDeOn7332BaTuRe';

module.exports = { port, db, secret };