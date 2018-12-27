const DB_USER_NAME = 'tichuot';
const DB_PASSWORD = 'yamahar1m';
const DB_ADDRESS = 'ds139534.mlab.com';
const DB_POST = '39534';
const DB_NAME = 'sth';

const mongoose = require('mongoose');
mongoose.connect(`mongodb://${DB_USER_NAME}:${DB_PASSWORD}@${DB_ADDRESS}:${DB_POST}/${DB_NAME}`, { useNewUrlParser: true });

const limit = 10; // limit get list story

module.exports = { mongoose, limit };
