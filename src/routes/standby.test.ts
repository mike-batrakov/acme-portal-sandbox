import request from 'supertest';
import app from '../app';

describe('GET /standby', () => {
  it('returns 200 with {"standby":true}', async () => {
    const response = await request(app).get('/standby');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ standby: true });
  });
});
