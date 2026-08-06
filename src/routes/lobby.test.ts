import request from 'supertest';
import app from '../app';

describe('GET /lobby', () => {
  it('returns 200 with text/html content containing "Acme Portal Lobby"', async () => {
    const response = await request(app).get('/lobby');
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/text\/html/);
    expect(response.text).toContain('Acme Portal Lobby');
  });
});
