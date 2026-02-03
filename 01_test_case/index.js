const {Builder, By, Browser} = require("selenium-webdriver")
// const assert = require("assert")
const chai= require('chai').should()
const {login}= require('./function')
let tc001= async function(){
    let driver = await new Builder().forBrowser(Browser.FIREFOX).build()
    try{

        await login(driver,"student@qacurry.com","Q@curry")
        

        var actual_text= await driver.findElement(By.xpath("//h2[contains(text(),'Hello')]")).getText()
        var expected_text="Hello Student"

        actual_text.should.eq(expected_text)
        // assert.equal(actual_text,expected_text)
    }catch (error){
        console.log(error)
    }finally{
        driver.quit()
    }
}

tc001()