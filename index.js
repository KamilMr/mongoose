const express = require('express');
const userRoutes = require('./users.routes');
const mongoose = require('mongoose');

const db = mongoose.connect('mongodb+srv://kmrowka:kmrowka@cluster0.nthxqyo.mongodb.net/contacs?retryWrites=true&loadBalanced=false&replicaSet=atlas-9teg12-shard-0&readPreference=primary&srvServiceName=mongodb&connectTimeoutMS=10000&authSource=admin&authMechanism=SCRAM-SHA-1')
db.then(() => {
  console.log('Db is running');
}).catch(err => {
  console.log(err)
})

const app = express();

app.use('/users', userRoutes);

app.listen(3000, () => {
  console.log('I am listenning on port 3000');
});
