const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const userRoutes = require('../Routes/userRoutes/userRoutes');

module.exports = (server) => {
  server.use(helmet());
  server.use(cors());
  server.use(morgan('dev'));
  server.use(express.json());
  server.use('/api/users', userRoutes);
}