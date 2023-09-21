const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
  // Handle incoming requests here
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
});

// Listen on port 3000
const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
