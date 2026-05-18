import request from 'supertest';
import app from '../app';

describe('GET /version', () => {
  it('returns 200 with {"version":"0.0.1"}', async () => {
    const response = await request(app).get('/version');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ version: '0.0.1' });
  });
});
