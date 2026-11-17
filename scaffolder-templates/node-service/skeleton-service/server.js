'use strict';

const http = require('node:http');
const service = '{{ values.name }}';
const port = Number(process.env.PORT || 8080);

http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');

  if (url.pathname === '/health') {
    res.writeHead(200, {'content-type': 'application/json'});
    res.end(JSON.stringify({status: 'ok', service}));
    return;
  }

  res.writeHead(200, {'content-type': 'application/json'});
  res.end(JSON.stringify({service, platform: 'Buildin10', status: 'running'}));
}).listen(port, '0.0.0.0', () => {
  console.log(`${service} listening on ${port}`);
});
