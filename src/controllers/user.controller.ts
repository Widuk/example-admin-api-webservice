import { Request, Response } from 'express';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

export class UserController {
    private readonly userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    public getAllUsers = async (req: Request, res: Response): Promise<void> => {
        try {
            const users = await this.userService.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    };

    public getUserById = async (req: Request, res: Response): Promise<void> => {
        const id = parseInt(req.params.id);
        try {
            const user = await this.userService.getUserById(id);
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    };

    public createUser = async (req: Request, res: Response): Promise<void> => {
        const user: Omit<User, 'id'> = req.body;
        try {
            const newUser = await this.userService.createUser(user);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    };

    public updateUser = async (req: Request, res: Response): Promise<void> => {
        const id = parseInt(req.params.id);
        const user: Partial<User> = req.body;
        try {
            const updatedUser = await this.userService.updateUser(id, user);
            if (updatedUser) {
                res.status(200).json(updatedUser);
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    };

    public deleteUser = async (req: Request, res: Response): Promise<void> => {
        const id = parseInt(req.params.id);
        try {
            const deletedUser = await this.userService.deleteUser(id);
            if (deletedUser) {
                res.status(200).json({ message: 'User deleted successfully' });
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    };
}
