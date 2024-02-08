const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('ok');
});

router.post('/', (req, res) => {
  res.send('ok');
});

router.put('/', (req, res) => {
  res.send('ok');
});

router.delete('/', (req, res) => {
  res.send('ok');
});

router.patch('/', (req, res) => {
  res.send('ok');
});

module.exports = router;
