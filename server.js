const http = require('http');
const hostname = process.envHOSTNAME || 'localhost';
const port = process.env.PORT || 4000;
const router = require('./router');

http.createServer(router).listen(port, hostname, () => {
    console.log(`Server running at port http://${hostname}:${port}`)
});