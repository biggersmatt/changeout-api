const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

require('./models');

app.get('/', (req, res) => {
  res.send('<h1>Change Out Api</h1>')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})