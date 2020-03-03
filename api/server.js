const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js'); // For Clients
const authRouterInstructor = require('../auth/auth-router-instructor.js'); // For Instructors
//const instructorsRouter = require('./instructors/instructorsRouter.js');
//const clientsRouter = require('./clients/clientsRouter.js');
//const classRouter = require('./classes/classRouter.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
    res.send('API is up and running!')
})

server.use('/api/auth', authRouter); // For Clients
server.use('/api/auth', authRouterInstructor); // For Instructors
//server.use('/api/instructors', instructorsRouter);
//server.use('/api/clients', clientsRouter);
//server.use('/api/classes', authenticate, classRouter);

module.exports = server;
