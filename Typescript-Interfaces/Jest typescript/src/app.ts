// In your main app.ts or server.ts
import express from 'express';
import usersRouter from './routes/userRoutes'; // Assuming your router file is in routes/users.ts

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Mount the users router
app.use('/users', usersRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('API de Usuários rodando! Teste as rotas:');
  console.log('GET /users');
  console.log('GET /users/:id');
  console.log('POST /users');
  console.log('PUT /users/:id');
  console.log('DELETE /users/:id');
});