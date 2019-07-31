import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import bluebird from 'bluebird';
import mongo from 'connect-mongo';
import mongoose from 'mongoose';
import compression from 'compression';
import { MONGODB_URI, SESSION_SECRET } from './util/secrets';

const MongoStore = mongo(session);

// Controllers

// API keys and Passport config

// Init Express app
const app = express();

// Connect to Mongo
// const mongoUrl = MONGODB_URI;
mongoose.Promise = bluebird;

// mongoose
//   .connect(mongoUrl, { useNewUrlParser: true })
//   .then(() => console.log('MongoDB connected successfully'))
//   .catch(err => console.log(err));

// Express config
app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Test route
app.get('/', async (req, res) => {  
  try {
    res.json({ msg: 'API running.' });
  } catch (err) {
    console.error(err);
    res.status(500).json('Server Error');
  }
});

export default app;





