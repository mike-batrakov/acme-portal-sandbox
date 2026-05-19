import request from 'supertest';
import app from '../app';

describe('GET /metrics', () => {
  it('returns 200 with {"requests_total":0}', async () => {
    const response = await request(app).get('/metrics');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ requests_total: 0 });
  });
});
