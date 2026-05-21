import request from 'supertest';
import app from '../app';

describe('GET /pong', () => {
  it('returns 200 with {"pong":true}', async () => {
    const response = await request(app).get('/pong');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ pong: true });
  });
});
