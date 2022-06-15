import express from 'express';
import { resourceLimits } from 'worker_threads';
import { getUsers, createUsers, updateUser } from './utils.js';

const app = express(); // ← server
app.use(express.json());

app.get('/api/users', (req, res) => {
  console.log('get users');
  try {
    const users = getUsers();
    res.status(200).json(users);
  } catch (e) {
    res.status(e.status).send(e.message);
  }
});

app.post('/api/users', (req, res) => {
  const newUser = createUsers(req.body);
});

app.put('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const updatedUser = updateUser(id, body);
  res.status(200).send(updatedUser);
});

// patch

app.get('/api/users/query', (req, res) => {
  console.log(req.query);
});

const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log('listening on port' + PORT);
});
