import pool from '../../src/database/database';
import { UserService } from '../../src/services/user.service';
import { User } from '../../src/models/user.model';

const userService = new UserService();

describe('User', () => {
    beforeAll(async () => {
        await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL
      )
    `);
    });

    afterAll(async () => {
        await pool.query('DROP TABLE users');
        pool.end();
    });

    describe('UserService', () => {
        it('should create a new user', async () => {
            const newUser: Omit<User, 'id'> = {
                name: 'testuser',
                email: 'testuser@example.com',
            };

            const createdUser = await userService.createUser(newUser);

            expect(createdUser.name).toEqual(newUser.name);
            expect(createdUser.email).toEqual(newUser.email);
            expect(createdUser.id).toBeDefined();
        });

        it('should get all users', async () => {
            const users: User[] = await userService.getAllUsers();

            expect(users.length).toBeGreaterThan(0);
        });

        it('should get a user by id', async () => {
            const users: User[] = await userService.getAllUsers();
            const userId = users[0].id;

            const user = await userService.getUserById(userId);

            expect(user).toMatchObject(users[0]);
        });

        it('should update a user', async () => {
            const users: User[] = await userService.getAllUsers();
            const userId = users[0].id;
            const updatedUser: Partial<User> = {
                name: 'updateduser',
                email: 'updateduser@example.com',
            };

            const user = await userService.updateUser(userId, updatedUser);

            expect(user).toMatchObject(updatedUser);
        });

        it('should delete a user', async () => {
            const users: User[] = await userService.getAllUsers();
            const userId = users[0].id;

            const deleted = await userService.deleteUser(userId);

            expect(deleted).toBe(true);
        });
    });
});