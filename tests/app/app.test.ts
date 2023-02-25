import request from 'supertest';
import app from '../../src/app/app';

describe('Test the root path', () => {
  test('It should respond to the GET method', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body).toBe('Hello! I\'m working! (づ｡◕‿‿◕｡)づ');
  });
});
