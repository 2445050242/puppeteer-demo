const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch({headless: false,executablePath:'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'});
    const page = await browser.newPage();

    await page.tracing.start({path: './data/trace/trace.json'});
    await page.goto('http://www.zhentaoo.com');
    await page.tracing.stop();
})();
