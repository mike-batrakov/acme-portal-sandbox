import request from 'supertest';
import app from '../app';

describe('GET /ready', () => {
  it('returns 200 with {"ready":true}', async () => {
    const response = await request(app).get('/ready');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ ready: true });
  });
});
