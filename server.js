const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const mongoDBURL = process.env.MONGODB_URI || 'mongodb://localhost/workout';

const app = express();

const PORT = process.env.PORT || 8080;

mongoose.connect(mongoDBURL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('./public'));

app.use(require('./routes/api'));
app.use(require('./routes/html'));

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
