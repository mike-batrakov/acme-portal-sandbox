import request from 'supertest';
import app from '../app';

describe('GET /keepalive', () => {
  it('returns 200 with {"keepalive":true}', async () => {
    const response = await request(app).get('/keepalive');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ keepalive: true });
  });
});
