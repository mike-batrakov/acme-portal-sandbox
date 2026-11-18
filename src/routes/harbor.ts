import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
  res.status(200).contentType('text/html').send(`<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Acme Portal Harbor</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: system-ui, sans-serif;
      background: #f4f6f9;
      color: #1a1a2e;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    header {
      background: #16213e;
      color: #fff;
      padding: 3rem 1.5rem 2rem;
      text-align: center;
    }
    header h1 {
      font-size: 2.5rem;
      letter-spacing: -0.5px;
      margin-bottom: 0.75rem;
    }
    header p.subtitle {
      font-size: 1.15rem;
      color: #a8b2c8;
      max-width: 540px;
      margin: 0 auto 1.75rem;
    }
    a.cta-button {
      display: inline-block;
      background: #0f3460;
      color: #fff;
      text-decoration: none;
      padding: 0.75rem 2rem;
      border-radius: 6px;
      font-size: 1rem;
      font-weight: 600;
      transition: background 0.2s;
    }
    a.cta-button:hover { background: #533483; }
    main {
      flex: 1;
      max-width: 960px;
      width: 100%;
      margin: 3rem auto;
      padding: 0 1.5rem;
    }
    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 1.5rem;
    }
    .card {
      background: #fff;
      border-radius: 10px;
      padding: 1.75rem 1.5rem;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    }
    .card h2 {
      font-size: 1.15rem;
      margin-bottom: 0.5rem;
      color: #0f3460;
    }
    .card p { font-size: 0.95rem; color: #555; }
    footer {
      text-align: center;
      padding: 1.5rem;
      font-size: 0.85rem;
      background: #16213e;
      color: #a8b2c8;
    }
  </style>
</head>
<body>
  <header>
    <h1>Acme Portal Harbor</h1>
    <p class="subtitle">A calm place to dock your projects, services, and teams before setting sail.</p>
    <a class="cta-button" href="/dashboard">Enter the Harbor</a>
  </header>
  <main>
    <div class="cards">
      <div class="card">
        <h2>Safe Mooring</h2>
        <p>Keep every project securely anchored in one reliable home base.</p>
      </div>
      <div class="card">
        <h2>Clear Horizons</h2>
        <p>See what is coming next across your services at a single glance.</p>
      </div>
      <div class="card">
        <h2>Smooth Departures</h2>
        <p>Launch releases with confidence using shared, repeatable workflows.</p>
      </div>
    </div>
  </main>
  <footer>
    &copy; 2024 Acme Corporation. All rights reserved.
  </footer>
</body>
</html>`);
});

export default router;
