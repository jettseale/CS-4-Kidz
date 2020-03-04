const express = require('express');
const path = require('path');

const app = express();

app.get('*', (req, res) => {
  if (req.url === '/') res.sendFile(path.join(`${__dirname}/public/html/index.html`));
  else if (req.url === '/style.css') res.sendFile(path.join(`${__dirname}/public/css/style.css`));
  else if (req.url === '/index.js') res.sendFile(path.join(`${__dirname}/public/js/index.js`))
  else res.sendFile(path.join(`${__dirname}/public/html/404.html`));
});

app.listen(process.env.port || 3000);

console.log('Running at Port 3000');