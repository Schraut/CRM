import express from 'express';
import mongoose from 'mongoose';
import routes from './src/routes/crm-routes';
import bodyParser from 'body-parser';

const app = express();
const PORT = 4000;

// Mongoose connection
// https://mongoosejs.com/docs/connections.html
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// body-parser setup
// http://expressjs.com/en/resources/middleware/body-parser.html
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
routes(app);

app.get('/', (req, res) =>
  res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT, () =>
  console.log(`The server I built is running on port ${PORT}`)
);

// Serve static files
app.use(express.static('public'));

// To start the server run:
// npm start

// Also, make sure mongodb is running with this command:
// brew services start mongodb-community@4.4
