const ServerJs = require('./models/Server');

require('dotenv').config();

const server=new ServerJs();

server.listen();
