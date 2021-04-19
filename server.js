// require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
// const session = require('express-session')
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || "https://gentle-savannah-74717.herokuapp.com/";
const routes = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// const CORS_DOMAIN = "https://localhost:4000";

app.use(cors());
// app.use(cors({
//   credentials: true,
//   origin: CORS_DOMAIN,
// }))

app.get('/', (req, res) => {
  res.send('<h1>Change Out Api</h1>')
})

app.use('/endcaps', routes.endcaps);
app.use('/flanks', routes.flanks);
app.use('/users', routes.users)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})