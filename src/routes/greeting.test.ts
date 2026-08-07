import request from 'supertest';
import app from '../app';

describe('GET /greeting', () => {
  it('returns 200 with text/html content containing "Acme Portal Greeting"', async () => {
    const response = await request(app).get('/greeting');
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/text\/html/);
    expect(response.text).toContain('Acme Portal Greeting');
  });
});
