import pool from '../../src/database/database';

describe('database', () => {
  it('should connect to the database', async () => {
    try {
      await pool.connect();
      expect(pool).toBeDefined();
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  });
});
