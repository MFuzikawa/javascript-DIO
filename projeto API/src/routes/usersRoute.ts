import { Request, Response, NextFunction, Router } from "express"
import userRepository from "../repositories/userRepository";

const usersRoute = Router();

usersRoute.get('/users', async (req: Request, res: Response, next: NextFunction) => {
    const users = await userRepository.findAllUsers()
    res.status(200).json(users);
})

usersRoute.get('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid
    const user = await userRepository.findById(uuid)
    res.status(200).json(user);
})

usersRoute.post('/users', async (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;
    const uuid = await userRepository.createUser(newUser)
    console.log(newUser)
    res.status(201).json(uuid);
})

usersRoute.put('user/:uuid'), async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const updateUser = req.body;
    updateUser.uuid = uuid;
    await userRepository.updateUser(updateUser)
    res.status(200).json({ uuid });
}

usersRoute.delete('/user/:uuid', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    await userRepository.removeUser(uuid)
    res.status(200);
})

export default usersRoute;