import request from 'supertest';
import app from '../app';

describe('GET /beacon', () => {
  it('returns 200 with text/html content containing "Acme Portal Beacon"', async () => {
    const response = await request(app).get('/beacon');
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/text\/html/);
    expect(response.text).toContain('Acme Portal Beacon');
  });
});
