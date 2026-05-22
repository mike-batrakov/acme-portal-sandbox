import request from 'supertest';
import app from '../app';

describe('GET /alert', () => {
  it('returns 200 with {"alert":true}', async () => {
    const response = await request(app).get('/alert');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ alert: true });
  });
});
