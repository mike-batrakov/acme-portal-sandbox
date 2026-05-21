import request from 'supertest';
import app from '../app';

describe('GET /heartbeat', () => {
  it('returns 200 with {"heartbeat":true}', async () => {
    const response = await request(app).get('/heartbeat');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ heartbeat: true });
  });
});
