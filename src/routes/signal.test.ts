import request from 'supertest';
import app from '../app';

describe('GET /signal', () => {
  it('returns 200 with {"signal":true}', async () => {
    const response = await request(app).get('/signal');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ signal: true });
  });
});
