require('dotenv').config();

const express = require('express');
const server = express();

const middlware = require('./middleware/middleware');
middlware(server);

const port = process.env.DEV_PORT
server.listen(port, () => `API Running on PORT ${port}`)