// Renders every src/*.html banner to png/ at 2x (3168x792).
// Usage: npm i -D playwright (or have it installed globally), then: node render.js
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const files = fs.readdirSync(path.join(__dirname, 'src')).filter(f => f.endsWith('.html')).sort();
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1584, height: 396 }, deviceScaleFactor: 2 });
  for (const f of files) {
    await page.goto('file://' + path.join(__dirname, 'src', f), { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    const out = path.join(__dirname, 'png', f.replace('.html', '.png'));
    await page.screenshot({ path: out });
    console.log('wrote', path.relative(__dirname, out));
  }
  await browser.close();
})();
