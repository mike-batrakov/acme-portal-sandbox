import request from 'supertest';
import app from '../app';

describe('GET /alive', () => {
  it('returns 200 with {"alive":true}', async () => {
    const response = await request(app).get('/alive');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ alive: true });
  });
});
