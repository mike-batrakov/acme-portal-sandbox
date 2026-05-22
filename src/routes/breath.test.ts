import request from 'supertest';
import app from '../app';

describe('GET /breath', () => {
  it('returns 200 with {"breath":true}', async () => {
    const response = await request(app).get('/breath');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ breath: true });
  });
});
