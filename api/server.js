const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const session = require('express-session');
const sessionConfig = require('./sessionConfig');

const protected = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const jokesRouter = require('../jokes/jokes-router.js');

const server = express();
server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(session(sessionConfig));


server.use('/api/auth', authRouter);
server.use('/api/jokes', protected, jokesRouter);

module.exports = server;
