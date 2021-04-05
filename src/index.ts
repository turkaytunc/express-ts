import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'hello from express' });
});

app.listen(4000, () => {
  console.log(`http://localhost:4000`);
});
