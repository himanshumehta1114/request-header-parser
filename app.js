const express = require('express');
var app = express();
const port = process.env.PORT || 3000;

app.get('/',(req,res) => {
  console.log(req.headers);
  res.send(req.headers);
});

app.listen(port,() => {
  console.log(`Server is up on port ${port}`);
});
