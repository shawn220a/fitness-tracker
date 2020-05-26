const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const mongoDBURL = process.env.MONGODB_URI || 'mongodb://localhost/workout';

const app = express();

const PORT = process.env.PORT || 8080;

mongoose.connect(mongoDBURL, {
  useNewUrlParser: true,
  useFindAndModify: false,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('./public'));

require('./routes/api')(app);
require('./routes/html')(app);

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
