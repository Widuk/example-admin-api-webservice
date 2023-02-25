import { Router } from 'express';
import { UserController } from '../controllers/user.controller';

const userRouter = Router();
const userController = new UserController();

userRouter.get('/users', userController.getAllUsers);
userRouter.get('/users/:id', userController.getUserById);
userRouter.post('/users', userController.createUser);
userRouter.put('/users/:id', userController.updateUser);
userRouter.delete('/users/:id', userController.deleteUser);

export default userRouter;
