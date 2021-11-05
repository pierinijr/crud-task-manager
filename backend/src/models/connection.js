const { MongoClient } = require('mongodb');

require('dotenv').config();

const MONGO_DB_URL = `${process.env.MONGODB_URI || 'mongodb://localhost:27017/TaskManager'}`;
const DB_NAME = 'TaskManager';

const connection = () => MongoClient
    .connect(MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,        
    })
    .then((conn) => conn.db(DB_NAME))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });

module.exports = connection;