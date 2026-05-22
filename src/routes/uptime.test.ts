import request from 'supertest';
import app from '../app';

describe('GET /uptime', () => {
  it('returns 200 with {"uptime":true}', async () => {
    const response = await request(app).get('/uptime');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ uptime: true });
  });
});
