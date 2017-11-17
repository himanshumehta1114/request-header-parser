const express = require('express');
var app = express();
const port = process.env.PORT || 3000;

app.get('/',(req,res) => {
  // console.log(req.headers);
  // res.send(req.headers);
  var ip = req.headers['x-forwarded-for'];
  var software = req.headers['user-agent'].split('(')[1].split(')')[0];
  var language = req.headers['accept-language'].split(',')[0];

  var jsonData = {
    'ipaddress' : ip,
    language,
    software
  };
  res.send(jsonData);
});

app.listen(port,() => {
  console.log(`Server is up on port ${port}`);
});
