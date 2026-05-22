import request from 'supertest';
import app from '../app';

describe('GET /idle', () => {
  it('returns 200 with {"idle":true}', async () => {
    const response = await request(app).get('/idle');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ idle: true });
  });
});
