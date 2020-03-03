const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Instructors = require('./auth-model-instructor.js');

const secrets = require('../database/config/secrets');

router.post('/register', (req, res) => {
  // implement registration
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 16);
  user.password = hash;

  Instructors.add(user)
    .then(saved => {
      const token = generateToken(user);
      res.status(201).json({payload: token});
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    })
});

router.post('/login', (req, res) => {
  // implement login
  let {username, password} = req.body;
  Instructors.findBy({username})
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({payload: token});
      } else {
        res.status(401).json({message: 'Invalid Credentials'});
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    })
});

function generateToken(instructor) {
  const payload = {
    subject: instructor.id, // standard claim = sub
    username: instructor.username //boolean if not instructor then is client. True by default.
  };
  const secret = secrets.jwtSecret
  const options = {
    expiresIn: '1d',
  };

  return jwt.sign(payload, jwtSecret, options);
};

module.exports = router;
