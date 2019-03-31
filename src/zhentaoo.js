const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch({headless: false,executablePath:'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'});
    const page = await browser.newPage();
    await page.goto('http://www.zhentaoo.com', {waitUntil: 'networkidle'});

    await page.screenshot({path: './data/zhentaoo/zhentaoo.png', type: 'png'});

    // browser.close();
})();
