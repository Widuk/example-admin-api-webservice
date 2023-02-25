import pool from '../database/database';
import { PaginatedResult } from '../models/paginated-result.model';
import { User } from '../models/user.model';

export class UserService {
  async getAllUsers(): Promise<User[]> {
    const { rows } = await pool.query<User>('SELECT * FROM example.users');
    return rows;
  }

  async getUsers(page: number = 1, pageSize: number = 10): Promise<PaginatedResult<User>> {
    const offset = (page - 1) * pageSize;
    const { rows } = await pool.query<User>(
      'SELECT * FROM example.users ORDER BY id LIMIT $1 OFFSET $2',
      [pageSize, offset]
    );
    const countResult = await pool.query<{ count: number }>('SELECT COUNT(*) as count FROM users');
    const totalItems = countResult.rows[0].count;
    const totalPages = Math.ceil(totalItems / pageSize);
    return {
      data: rows,
      page,
      pageSize,
      totalPages,
      totalItems
    };
  }

  async getUserById(id: number): Promise<User | null> {
    const { rows } = await pool.query<User>('SELECT * FROM example.users WHERE id = $1', [id]);
    return rows[0] || null;
  }

  async createUser(user: Omit<User, 'id'>): Promise<User> {
    const { rows } = await pool.query<User>(
      'INSERT INTO example.users (name, email) VALUES ($1, $2) RETURNING *',
      [user.name, user.email]
    );
    return rows[0];
  }

  async updateUser(id: number, user: Partial<User>): Promise<User | null> {
    const { rows } = await pool.query<User>(
      'UPDATE example.users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
      [user.name, user.email, id]
    );
    return rows[0] || null;
  }

  async deleteUser(id: number): Promise<boolean> {
    const { rowCount } = await pool.query('DELETE FROM example.users WHERE id = $1', [id]);
    return rowCount === 1;
  }
}
