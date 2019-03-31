const puppeteer = require('puppeteer')
// var {timeout} = require('../../tools/tools.js');

puppeteer.launch({
    headless: false,
    executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    timeout: 300000
}).then(async browser => {
    // 打开空白页面
    const page = await browser.newPage();
    // 设置浏览器视窗
    page.setViewport({
        width: 1290,
        height: 768,
    });
    //登录胡虾卖
    try {
        await page.goto('http://www.huxiamai.com')
        await page.waitFor(1000)

        var loginPhoneOrEmail = await page.$('[placeholder=输入账号]')
        // console.log('loginPhoneOrEmail:', loginPhoneOrEmail);
        await loginPhoneOrEmail.click()
        await page.type('18030193065', {delay: 200})

        var password = await page.$('[placeholder=输入密码]')
        // console.log('password:', password);
        await password.click()
        await page.type('123456', {delay: 200})

        await page.waitFor(1000)
        var authLogin = await page.$('#pwd_login_btn')
        // console.log('authLogin:', authLogin);
        await authLogin.click()

        await page.waitFor(3000)
        // await browser.close();
    } catch (e) {
        console.log('登陆失败：' + e);
    }

    //获取侧边栏标题
    // try{
    //     await page.waitForSelector('.admin-sidebar-list li')
    //     let atags = await page.evaluate(()=>{
    //         let list = [...document.querySelectorAll('.admin-sidebar-list li a')];
    //         return list.map(el => {
    //             return {title: el.innerText}
    //         })
    //         // return {title: list[3].innerText}
    //     });
    //     console.log(atags);
    //     // page.close()
    // }catch(e){
    //     console.log(e.message);
    // }

    //修改个人资料
    // try{
    //     var info = await page.$('#admin-offcanvas .admin-parent')
    //     await info.click()
    //
    //     var item = await page.$('#admin-offcanvas .admin-parent li')
    //     await item.click()
    //     var item_name = await page.$('#brief')
    //     await item_name.click()
    //     await page.type('测试', {delay: 200})
    //
    //     var item_phone = await page.$('#phone')
    //     await item_phone.click()
    //     // await page.type('18030193065', {delay: 200})
    //
    //     var item_phone = await page.$('#update')
    //     await item_phone.click()
    //
    // }catch (e){
    //     console.log(e.message);
    // }

    // try{
    //     var info = await page.$('#admin-header-list [class="am-dropdown-flip"]')
    //     await info.click()
    // }catch (e){
    //     console.log(e.message);
    // }
})