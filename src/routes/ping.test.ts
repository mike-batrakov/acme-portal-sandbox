import request from 'supertest';
import app from '../app';

describe('GET /ping', () => {
  it('returns 200 with {"pong":true}', async () => {
    const response = await request(app).get('/ping');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ pong: true });
  });
});
