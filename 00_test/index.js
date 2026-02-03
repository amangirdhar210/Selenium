const selenium = require("selenium-webdriver")
// const {Builder, Browser,By,Key,until}= require("selenium-webdriver")

myFirstTest= async function() {
    // let driver = await new Builder().forBrowser(Browser.FIREFOX).build()
    let driver = await new selenium.Builder().forBrowser(selenium.Browser.EDGE).build()
    await driver.get("https://bookstore.qacurry.com")
    await driver.findElement(selenium.By.xpath("//input[@name='login_email']")).sendKeys("student@qacurry.com")
    await driver.findElement(selenium.By.xpath("//input[@id='password']")).sendKeys("Q@curry")
    await driver.findElement(selenium.By.xpath("//input[@value='Login']")).click()
    
    driver.quit()
}()