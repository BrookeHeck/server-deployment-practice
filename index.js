const server = require('./server.js');

server.listen(process.env.PORT || 3002, () => console.log('Listening'));