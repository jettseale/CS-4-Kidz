const express = require('express');
const path = require('path');

const app = express();

app.get('*', (req, res) => {

    console.log(req.url);
  if (req.url === '/') res.sendFile(path.join(`${__dirname}/public/html/index.html`));
  else if (req.url === '/index') res.sendFile(path.join(`${__dirname}/public/html/index.html`));
  else if (req.url === '/create-account') res.sendFile(path.join(`${__dirname}/public/html/create-account.html`));
  else if (req.url === '/style.css') res.sendFile(path.join(`${__dirname}/public/css/style.css`));
  else if (req.url === '/index.js') res.sendFile(path.join(`${__dirname}/public/js/index.js`));
  else if (req.url === '/create.js') res.sendFile(path.join(`${__dirname}/public/js/create.js`));
  else if(req.url === '/forget-password') res.sendFile (path.join(`${__dirname}/public/html/forget-password.html`));
  else res.sendFile(path.join(`${__dirname}/public/html/404.html`));
});

app.post('*', function(req,res) {



});

app.listen(process.env.port || 3000);

console.log('Running at Port 3000');

