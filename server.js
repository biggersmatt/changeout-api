const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session')
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 4000;
const routes = require('./routes');
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const CORS_DOMAIN = 'http://localhost:3000'

app.use(cors({
  credentials: true,
  origin: CORS_DOMAIN
}))


// ******************* Express Sessions 
const sess = {
  secret: 'arffarffwoofbark',
  resave: false,
  saveUninitialized: false,
  unset: 'destroy',
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 * 2, //valid for 2 weeks. 
  }
}
if (process.env.NODE_ENV === 'production') {
  app.set('trust proxy', 1);
  sess.cookie.secure = true;
  console.log('process env chck hit')
}
app.use(session(sess))
// ******************* Express Sessions

app.get('/', (req, res) => {
  res.send('<h1>Change Out Api</h1>')
})

app.use('/api/endcaps', routes.endcaps);
app.use('/api/flanks', routes.flanks);
app.use('/api/settings', routes.settings);
app.use('/api/users', routes.users)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})