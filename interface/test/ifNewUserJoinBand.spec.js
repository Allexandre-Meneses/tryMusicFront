// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('ifNewUserJoinBand', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('ifNewUserJoinBand', async function() {
    await driver.get("http://127.0.0.1:5501/interface/pages/bands-empty.html")
    await driver.manage().window().setRect({ width: 1050, height: 748 })
    await driver.findElement(By.css("a > button")).click()
    await driver.findElement(By.id("bandCodeInput")).click()
    await driver.findElement(By.id("bandCodeInput")).sendKeys("0123")
    await driver.findElement(By.css("button")).click()
  })
})