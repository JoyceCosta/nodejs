const http = require('http');const { Http2ServerResponse } = require('http2');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  //process.exit(); IS FOR STOP DOING THE JOB IN THE SERVER
  res.setHeader('Content-type', 'text/html');
  res.write('<html>')
  res.write('<head><title>My First node.js page</title></head>');
  res.write('<body><h1>Hello from node.js</h1></body>');
  res.write("</html>");
  res.end();
});

server.listen(3000);