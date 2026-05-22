import request from 'supertest';
import app from '../app';

describe('GET /awake', () => {
  it('returns 200 with {"awake":true}', async () => {
    const response = await request(app).get('/awake');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ awake: true });
  });
});
