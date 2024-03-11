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
  await commands.measure.start('HomePage');
  await commands.navigate('https://front-end-autoinstrument-smetest.apps.aps.lab/');
  await commands.measure.stop();
  // 2 | setWindowSize | 1552x840 |
  // await seleniumElement.manage().window().setRect({ width: 1552, height: 840 })
    // 3 | mouseOver | css=.item:nth-child(1) .img-responsive |
 await commands.measure.start('Click Login');
    const seleniumElement = await seleniumDriver.findElement(By.xpath("//a[contains(text(),'Login')]"));
    context.log.info('The element tag is ', await seleniumElement.getTagName());
    // 5 | click | linkText=Login |
   await seleniumElement.click()
  await commands.measure.stop();
 
  await commands.measure.start('Click login text field');
    // 6 | click | id=username-modal |
  await seleniumElement.findElement(By.xpath("//input[@id='username-modal']")).click()
  await commands.measure.stop();
 
  // await seleniumElement.findElement(By.css('#username-modal')).click()
    // 7 | type | id=username-modal | test
  await commands.measure.start('Write user name');
  await seleniumElement. findElement(By.xpath("//input[@id='username-modal']")).sendKeys("test")
  await commands.measure.stop();
 
  await commands.measure.start('Click on password field');
  await seleniumElement.findElement(By.xpath("//input[@id='password-modal']")).click()
  await commands.measure.stop();
 
  await commands.measure.start('Write password');
  await seleniumElement.findElement(By.xpath("//input[@id='password-modal']")).sendKeys('123456789')
  await commands.measure.stop();
 
  await commands.measure.start('Write password');
  await seleniumElement.findElement(By.xpath("//button[contains(.,\' Log in\')]")).click()
  await commands.wait.byPageToComplete();
  await commands.measure.stop();
 
 
 
  await commands.measure.start('Open catalogue');
  await seleniumElement.findElement(By.xpath("//li[@id='tabCatalogue']/a")).click()
  await commands.wait.byPageToComplete();
  await commands.measure.stop();
 
  await commands.measure.start('click on product');
  await seleniumElement.findElement(By.xpath("//div[@id=\'products\']/div[2]/div/div/div/div[2]/a/img")).click()
  await commands.wait.byPageToComplete();
  await commands.measure.stop();
 
  await commands.measure.start('Add to cart');
  await seleniumElement.findElement(By.xpath("//a[@id='buttonCart']")).click()
  await commands.measure.stop();
 
  await commands.measure.start('Open Cart');
  await seleniumElement.findElement(By.xpath("//span[@id='numItemsInCart']")).click()
  await commands.wait.byPageToComplete();
  await commands.measure.stop();
 
 
  await commands.measure.start('Basket overvoew');
  await seleniumElement.findElement(By.xpath('//div[@id=\'basket-overview\']/a')).click()
  await commands.wait.byPageToComplete();
  await commands.measure.stop();
 
  await commands.measure.start('Update Cart');
  await seleniumElement.findElement(By.xpath("//a[@onclick='updateCart()']")).click()
  await commands.measure.stop();
 
  await commands.measure.start('Pass order button');
  await seleniumElement.findElement(By.xpath("//button[@id='orderButton']")).click()
  await commands.wait.byPageToComplete();
  await commands.measure.stop();
 
  await commands.measure.start('Logout');
  await seleniumElement.findElement(By.linkText('Logout')).click()
  await commands.measure.stop();
 
 
  return commands.measure.stop();
}
