// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('cancelCreateEvent', function() {
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
  it('cancelCreateEvent', async function() {
    await driver.get("http://127.0.0.1:5501/interface/pages/mural.html")
    await driver.manage().window().setRect({ width: 1050, height: 748 })
    await driver.findElement(By.css(".butt")).click()
    await driver.findElement(By.css("#modal > #modal-content .close-button")).click()
  })
})