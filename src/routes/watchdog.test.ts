import request from 'supertest';
import app from '../app';

describe('GET /watchdog', () => {
  it('returns 200 with {"watchdog":true}', async () => {
    const response = await request(app).get('/watchdog');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ watchdog: true });
  });
});
