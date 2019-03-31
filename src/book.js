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
        await page.goto('http://smjslib.jmu.edu.cn/search.aspx');
        var login = await page.$('.contr input');
        await login.click();
        await page.type('js', {delay: 200})
        var input = await page.$('[value=快速检索]');
        await input.click();
        await page.waitFor(3000)
        var redlink = await page.$('.redlink');
        await redlink.click();
        await page.waitForSelector('.title');
        // var pailie = await page.$('.title');
        // pailie.click();
        let aTags = await page.evaluate(() => {
            let as = [...document.querySelectorAll('table tr td')];
            return as.map((a) =>{
                return {
                    // href: a.href.trim(),
                    name: a.html
                }
            });

            // let as = document.querySelector('.select');
            // return {text:as.text};
        });
        console.log(aTags);
        // browser.close();
    }catch (e){
        console.log(e.message);
    }

})();
