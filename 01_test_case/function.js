const {By}= require("selenium-webdriver")

var login = async function(driver,username,password) {
    await driver.get("https://bookstore.qacurry.com")
    
            await driver.findElement(By.xpath("//input[@name='login_email']")).sendKeys(username)
            await driver.findElement(By.xpath("//input[@id='password']")).sendKeys(password)
            await driver.findElement(By.xpath("//input[@value='Login']")).click()
}

module.exports={
    login
}