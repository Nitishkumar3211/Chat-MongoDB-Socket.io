const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://45.79.189.39/chat', {useMongoClient: true});

mongoose.connection
  .once('open', () => console.log('Connected to the database'))
  .on('error', err => console.error(err));
