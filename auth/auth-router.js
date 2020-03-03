const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Clients = require('./auth-model.js');

const secrets = require('../database/config/secrets');

router.get('/clients', (req,res) => {
  Clients.find()
    .then(clients => {
      res.status(200).json(clients);
    })
    .catch(err => {
      res.status(404).json({message: 'clients not found'})
    })
}

router.post('/registerClient', (req, res) => {
  // implement registration
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 16);
  user.password = hash;

  Clients.add(user)
    .then(saved => {
      const token = generateToken(user);
      res.status(201).json({payload: token});
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    })
});

router.post('/loginClient', (req, res) => {
  // implement login
  let {username, password} = req.body;
  Clients.findBy({username})
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

function generateToken(client) {
  const payload = {
    subject: client.id, // standard claim = sub
    username: client.username //boolean if not instructor then is client. True by default.
  };
  const secret = secrets.jwtSecret
  console.log(secret);
  const options = {
    expiresIn: '1d',
  };

  return jwt.sign(payload, jwtSecret, options);
};

module.exports = router;
