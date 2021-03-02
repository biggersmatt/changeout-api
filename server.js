const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const routes = require('./routes');

require('./models');

app.get('/', (req, res) => {
  res.send('<h1>Change Out Api</h1>')
})

app.use('/api', routes.endcaps)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})