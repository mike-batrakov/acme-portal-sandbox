import request from 'supertest';
import app from '../app';

describe('GET /status', () => {
  it('returns 200 with {"ready":true}', async () => {
    const response = await request(app).get('/status');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ ready: true });
  });
});
