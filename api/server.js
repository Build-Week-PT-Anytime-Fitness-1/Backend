const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js'); // For Clients

const classRouter = require('../classes/classRouter.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ test: "LISTENING" })
})

server.use('/api/auth', authRouter); // For Clients and Instructors now

server.use('/api/classes', authenticate, classRouter);

module.exports = server;
