const express = require('express');
require('dotenv').config();
const userRoutes = require('./users.routes');
const mongoose = require('mongoose');

const DB_URL = process.env.DB_HOST;

const db = mongoose.connect(DB_URL);
db.then(() => {
  console.log('Db is running');
}).catch(err => {
  console.log(err)
})

const app = express();


app.use(express.json());
app.use('/users', userRoutes);

app.listen(3000, () => {
  console.log('I am listenning on port 3000');
});
