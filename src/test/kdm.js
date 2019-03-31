const puppeteer = require('puppeteer');

(async() =>{
    try{
        const browser = await puppeteer.launch({
            headless: false,
            executablePath:'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
        });
        const page = await browser.newPage();
        // 设置浏览器视窗
        page.setViewport({
            width: 1290,
            height: 768,
        });
        await page.goto('https://www.kuaidimao.com');
        var login = await page.$('.hd-center .btn1');
        await login.click();

        var input = await page.$('.password');
        await input.click();
        await page.type('123456', {delay: 200})
        // browser.close();
    }catch (e){
        console.log(e.message);
    }

})();