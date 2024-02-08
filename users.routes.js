const express = require('express');
const {User} = require('./users.schema');

const router = express.Router();

router.get('/', async (req, res) => {
  let users;
  try {
    users = await User.find();
  } catch(err) {
    console.log(err);
    return res.status(400).send(err);
  }
  res.json({users});
});

router.post('/', async(req, res) => {
  const {firstName, lastName, email} = req.body;
  // Validate with Joi

  const user = new User({firstName, lastName, email});

  let response;
  try {
    response = await user.save();
  } catch(err) {
    console.log(err);
    return res.send(err.message)
  }
  res.json({user: response});
});

router.get('/:id', async(req, res) => {
  let user;
  try {
    user = await User.findById(req.params.id);
  }catch(err) {
    console.log(err);
    return res.send(err.message)
  }

  res.send(user || 'Not found');
});

router.delete('/:id', async(req, res) => {
  let deletedUser;
  try {
    deletedUser = await User.deleteOne({_id: req.params.id});
  }catch(err) {
    console.log(err);
    return res.send(err.message)
  }
  res.json({deletedUser})
});

router.patch('/:id', async(req, res) => {
  const id = req.params.id;
  const {lastName} = req.body;

  const filter = {_id: id};
  const update = {lastName};

  let user;
  try {
    user = await User.findOneAndUpdate(filter, update);
  }catch (err) {
    console.log(err);
    return res.send(err.message);
  }
  res.send(user);
});

module.exports = router;
