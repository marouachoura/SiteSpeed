/**
 * @param {import('browsertime').BrowsertimeContext} context
 * @param {import('browsertime').BrowsertimeCommands} commands
 */
export default async function (context, commands) {
  // We fetch the selenium webdriver from context
  // The selenium-webdriver 
  // https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index.html
  const seleniumWebdriver = context.selenium.webdriver;
  // The driver exposes for example By that you use to find elements
  const By = seleniumWebdriver.By;
 
  // We use the driver to find an element
  const seleniumDriver = context.selenium.driver;
  // Test name: sockshop
    // Step # | name | target | value
    // 1 | open | / | 
  await commands.navigate('https://front-end-autoinstrument-smetest.apps.aps.lab/');
    // 2 | setWindowSize | 1552x840 | 
  // await seleniumElement.manage().window().setRect({ width: 1552, height: 840 })
    // 3 | mouseOver | css=.item:nth-child(1) .img-responsive | 
  const seleniumElement = await seleniumDriver.findElement(By.linkText('Login'));
  context.log.info('The element tag is ', await seleniumElement.getTagName());
  await commands.measure.start('SockShopPage');
    // 5 | click | linkText=Login | 
  await seleniumElement.click()
    // 6 | click | id=username-modal | 
  
  // await seleniumElement.findElement(By.name('username-modal')).click()
  // await seleniumElement.findElement(By.css('#username-modal')).click()
  
    // 7 | type | id=username-modal | test
  await seleniumElement. findElement(By.css('#username-modal')).sendKeys("test")
 
    // 8 | type | id=password-modal | 123456789
  // await seleniumElement.findElement(By.id('password-modal')).click()
  await seleniumElement.findElement(By.id('password-modal')).sendKeys('123456789')
    // 9 | click | css=.text-center:nth-child(3) > .btn | 
  // await seleniumElement.findElement(By.xpath('//button[contains(.,\' Log in\')]')).click()
  await seleniumElement.findElement(By.css(".text-center:nth-child(3) > .btn")).click()

  await commands.wait.byPageToComplete();
    // 10 | click | css=.dropdown-toggle | 
  await seleniumElement.findElement(By.xpath('//a[contains(text(),\'Catalogue\')]')).click()
  await commands.wait.byPageToComplete();
    // 11 | click | css=.col-md-4:nth-child(2) .btn-primary | 
  await seleniumElement.findElement(By.xpath('//div[@id=\'products\']/div[2]/div/div/div/div[2]/a/img')).click()
  await commands.wait.byPageToComplete();
    // 12 | click | id=numItemsInCart | 
  await seleniumElement.findElement(By.id('buttonCart')).click()
  await seleniumElement.findElement(By.id('numItemsInCart')).click()
  await commands.wait.byPageToComplete();
    // 13 | click | linkText=Update basket | 
  await seleniumElement.findElement(By.xpath('//div[@id=\'basket-overview\']/a')).click()
  await commands.wait.byPageToComplete();
  await seleniumElement.findElement(By.linkText('Update basket')).click()
    // 14 | click | id=orderButton | 
  await seleniumElement.findElement(By.id('orderButton')).click()
  await commands.wait.byPageToComplete();
    // 16 | click | linkText=Logout | 
  await seleniumElement.findElement(By.linkText('Logout')).click()
  return commands.measure.stop();
}
