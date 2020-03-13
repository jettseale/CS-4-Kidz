const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyparser = require('body-parser');


var app = express();
app.use(bodyparser.json());

app.get('*', (req, res) => {
console.log(req.url);
  if (req.url === '/') res.sendFile(path.join(`${__dirname}/public/html/index.html`));
  else if (req.url === '/index') res.sendFile(path.join(`${__dirname}/public/html/index.html`));
  else if (req.url === '/create-account') res.sendFile(path.join(`${__dirname}/public/html/create-account.html`));
  else if (req.url === '/email-data.json') res.sendFile(path.join(`${__dirname}/public/email-data.json`));
  else if (req.url === '/style.css') res.sendFile(path.join(`${__dirname}/public/css/style.css`));
  else if (req.url === '/index.js') res.sendFile(path.join(`${__dirname}/public/js/index.js`));
  else if (req.url === '/aes.js') res.sendFile(path.join(`${__dirname}/rollups/aes.js`));
  //else if (req.url === '/pbkdf2.js') res.sendFile(path.join(`${__dirname}/node_modules/crypto-js/pbkdf2.js`));
  else if (req.url === '/create.js') res.sendFile(path.join(`${__dirname}/public/js/create.js`));
  else if (req.url === '/forget-password') res.sendFile (path.join(`${__dirname}/public/html/forget-password.html`));
  else if (req.url === '/email') res.sendFile(path.join(`${__dirname}/public/html/email.html`));
  else if (req.url === '/email.js') res.sendFile(path.join(`${__dirname}/public/js/email.js`));
  else res.sendFile(path.join(`${__dirname}/public/html/404.html`));
});

app.post('*', (req, res) => {

  if (req.url == '/create'){
    fs.readFile(path.join(`${__dirname}/public/email-data.json`), 'utf8',function(err,raw){
                if(err){
                    throw err;
                }
                var data = JSON.parse(raw);
                data.push(req.body);
                var json = JSON.stringify(data);
                fs.writeFile(__dirname + '/public/email-data.json',json,function(){
                    res.status(200).send("Data saved successfully");
                    res.sendFile(path.join(`${__dirname}/public/html/index.html`));

                });
            });
          }
});

app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
