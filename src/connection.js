const mongoose = require('mongoose');

const MONGO_DB_URL = 'mongodb://localhost:27017/University';

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URI
    || MONGO_DB_URL,
) => mongoose.connect(mongoDatabaseURI);

module.exports = connectToDatabase;
