const http = require('http');
const port = process.env.PORT || 8080;

const requestListener = function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<html><body><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVAo-xNljd7FbADI8Y8T0WNh9qzouIGQ9XIg&usqp=CAU" alt="sailboat"></body></html>');
}

const server = http.createServer(requestListener);
server.listen(port);