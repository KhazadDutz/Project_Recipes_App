require('newrelic')
// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from the Node.js app on Heroku!');
});

app.get('/about', (req, res) => {
    res.send('This is the about page')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});