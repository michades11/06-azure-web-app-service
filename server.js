const http = require('http');

// Azure App Service dynamically assigns a port via process.env.PORT. 
// We use 3000 as a local fallback.
const port = process.env.PORT || 3000;

// This reads from an environment variable we will set up in Azure later.
const message = process.env.CUSTOM_MESSAGE || "Hello from your local machine!";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`${message}\n`);
});

server.listen(port, () => {
  console.log(`Server running locally at http://localhost:${port}/`);
});