const express = require('express');
const userRoutes = require('./users.routes');

const app = express();

app.use('/users', userRoutes);

app.listen(3000, () => {
  console.log('I am listenning on port 3000');
});
