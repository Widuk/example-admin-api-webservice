import { User } from '../../src/models/user.model';

describe('User Model', () => {
    it('should have the correct data types', () => {
        const user: User = {
            id: 1,
            name: 'Test User',
            email: 'testuser@example.com',
        };

        expect(typeof user.id).toBe('number');
        expect(typeof user.name).toBe('string');
        expect(typeof user.email).toBe('string');
    });

    it('should create a new user', () => {
        const user: User = {
            id: 1,
            name: 'John Doe',
            email: 'johndoe@example.com',
        };

        expect(user.id).toBe(1);
        expect(user.name).toBe('John Doe');
        expect(user.email).toBe('johndoe@example.com');
    });
});
