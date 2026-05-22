import request from 'supertest';
import app from '../app';

describe('GET /pulse', () => {
  it('returns 200 with {"pulse":true}', async () => {
    const response = await request(app).get('/pulse');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ pulse: true });
  });
});
