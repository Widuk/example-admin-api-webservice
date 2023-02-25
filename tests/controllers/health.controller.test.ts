import request from 'supertest';
import app from '../../src/app/app';

describe('HealthController', () => {
  describe('GET /', () => {
    it('should return a 200 status code and "Hello! I\'m working!" message', async () => {
      const response = await request(app).get('/');

      expect(response.status).toBe(200);
      expect(response.body).toBe('Hello! I\'m working! (づ｡◕‿‿◕｡)づ');
    });
  });
});