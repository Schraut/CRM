import express from 'express';
import routes from './src/routes/crm-routes';

const app = express();
const PORT = 4000;
// Routes
routes(app);

app.get('/', (req, res) =>
  res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT, () =>
  console.log(`The server I built is running on port ${PORT}`)
);
