import express from 'express';

const app = express();

app.get('/users', ( request, response) => {
  response.json([
    'Augusto',
    'Ostapechen'
  ]);
});

app.listen(3333);