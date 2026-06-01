import request from 'supertest';
import app from '../app';

describe('GET /welcome', () => {
  it('returns 200 with text/html content containing "Welcome to the Acme Portal"', async () => {
    const response = await request(app).get('/welcome');
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/text\/html/);
    expect(response.text).toContain('Welcome to the Acme Portal');
  });
});
