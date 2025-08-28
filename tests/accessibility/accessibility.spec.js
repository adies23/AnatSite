const { chromium } = require('playwright');
const AxeBuilder = require('@axe-core/playwright').default;

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('http://localhost:4200');

  // חייבים להעביר את ה-page, לא את ה-context
  const results = await new AxeBuilder({ page }).analyze();

  console.log('נמצאו בעיות נגישות:', results.violations.length);
  results.violations.forEach(v => {
    console.log(`\n${v.id}: ${v.description}`);
    v.nodes.forEach(node => {
      console.log(`  סלקטור: ${node.target}`);
      console.log(`  הודעה: ${node.failureSummary}`);
    });
  });

  await browser.close();
})();
