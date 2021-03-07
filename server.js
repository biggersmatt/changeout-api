const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;
const routes = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.get('/', (req, res) => {
  res.send('<h1>Change Out Api</h1>')
})

app.use('/api/endcaps', routes.endcaps);
app.use('/api/flanks', routes.flanks);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})