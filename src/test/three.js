const puppeteer = require('puppeteer');

(async() =>{
    try{
        const browser = await puppeteer.launch({
            headless: true,
            executablePath:'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
        });
        const page = await browser.newPage();
        await page.goto('http://es6.ruanyifeng.com/#README');
        await page.waitFor(2000);
        //获取文档并生成pdf
        let aTags = await page.evaluate(() => {
            let as = [...document.querySelectorAll('ol li a')];
            return as.map((a) =>{
                return {
                    href: a.href.trim(),
                    name: a.text
                }
            });
        });
        await page.pdf({
            path:`./data/kdm/${aTags[0].name}.pdf`
        });
        page.close();

        for (var i = 1; i < aTags.length; i++) {
            let page = await browser.newPage()
            var a = aTags[i];
            await page.goto(a.href);
            await page.waitFor(2000);
            await page.pdf({path: `./data/kdm/${a.name}.pdf`});
            page.close();
        }

        browser.close();
    }catch (e){
        console.log(e.message);
    }

})();