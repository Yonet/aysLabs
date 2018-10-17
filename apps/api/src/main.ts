import * as express from 'express';

const app = express();

app.get('/api', (req, res) => {
  res.send(`Welcome to api!`);
});

const port = 3333;
app.listen(port, err => {
  if (err) {
    console.error(err);
  }
  console.log(`Listening at http://localhost:${port}`);
});
