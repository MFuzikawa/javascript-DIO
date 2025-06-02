
import { v4 as uuidv4 } from 'uuid';
import { User } from '../models/User';
import { Router, Request, Response } from 'express';


const router = Router();


let users: User[] = [
  { id: uuidv4(), name: 'João Silva', email: 'joao.silva@example.com', age: 30 },
  { id: uuidv4(), name: 'Maria Souza', email: 'maria.souza@example.com', age: 25 },
];


router.get('/', (req: Request, res: Response) => {
   res.status(200).json(users);
   return
});


router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const user = users.find(u => u.id === id);

  if (!user) {
     res.status(404).json({ message: 'Usuário não encontrado.' });
     return
  }

   res.status(200).json(user);
   
});

// POST /users - Criar um novo usuário
router.post('/', async (req:Request, res:Response, ) => {
  const { name, email, age } = req.body;

  if (!name || !email) {
     res.status(400).json({ message: 'Nome e email são campos obrigatórios.' });
     
  }

  // Verifica se o email já existe
  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
     res.status(409).json({ message: 'Este email já está em uso.' });
     
  }

  const newUser: User = {
    id: uuidv4(),
    name,
    email,
    age: age,
  };

  users.push(newUser);
   res.status(201).json(newUser);
   return
});

// PUT /users/:id - Modificar um usuário existente
router.put('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email, age } = req.body;

  const userIndex = users.findIndex(u => u.id === id);

  if (userIndex === -1) {
     res.status(404).json({ message: 'Usuário não encontrado.' });
  }

  // Opcional: verificar se o novo email já está em uso por outro usuário
  if (email && users.some(u => u.email === email && u.id !== id)) {
     res.status(409).json({ message: 'Este email já está em uso por outro usuário.' });
  }

  users[userIndex] = {
    ...users[userIndex], // Mantém os dados existentes
    name: name || users[userIndex].name, // Atualiza se fornecido, senão mantém o antigo
    email: email || users[userIndex].email,
    age: age !== undefined ? age : users[userIndex].age, // Permite que 'age' seja 0
  };

   res.status(200).json(users[userIndex]);
   return
});

// DELETE /users/:id - Deletar um usuário
router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;

  const initialLength = users.length;
  users = users.filter(u => u.id !== id);

  if (users.length === initialLength) {
     res.status(404).json({ message: 'Usuário não encontrado.' });
  }

   res.status(204).send(); 
   return
});

export default router;