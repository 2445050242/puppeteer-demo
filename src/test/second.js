const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const iPhone = devices['iPhone 6'];

(async() =>{
    try{
        const browser = await puppeteer.launch({
            headless: false,
            executablePath:'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
        });
        const page = await browser.newPage();
        await page.emulate(iPhone);
        await page.tracing.start({path:'./data/kdm/trace.json'});
        await page.goto('https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=2210323&g_f=tuijiannewupload#index/fans');
        await page.tracing.stop();
        browser.close();
    }catch (e){
        console.log(e.message);
    }

})();