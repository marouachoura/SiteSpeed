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
    const loginUrl = 'http://front-end-faro-smetest.apps.aps.lab/'; 
    // await commands.measure.start('Login Page', { alias: loginUrl });
  await commands.navigate('http://front-end-autoinstrument-smetest.apps.aps.lab/');
  await commands.wait.byPageToComplete();
  const seleniumElement = await seleniumDriver.findElement(By.linkText('Login'));
  // 2 | setWindowSize | 1552x840 |
  // await seleniumElement.manage().window().setRect({ width: 1552, height: 840 })

  await commands.measure.start('Click Login');
  await seleniumElement.click()
  await commands.wait.byPageToComplete();
  await seleniumDriver.findElement(By.xpath("//input[@id='username-modal']")).click()
  await seleniumDriver.findElement(By.xpath("//input[@id='username-modal']")).sendKeys("user1")
  await seleniumDriver.findElement(By.xpath("//input[@id='password-modal']")).click()
  await seleniumDriver.findElement(By.xpath("//input[@id='password-modal']")).sendKeys('password')
  await seleniumDriver.findElement(By.xpath("//div[@id='login-modal']/div/div/div[2]/form/p/button")).click()
  await commands.wait.byPageToComplete();
  await commands.measure.stop();  
  
 
  await commands.measure.start('Open catalogue');
  await seleniumDriver.findElement(By.css("#tabCatalogue > a")).click()
  await commands.wait.byPageToComplete();
  await commands.measure.stop();
 
  await commands.measure.start('click on product');
  await seleniumDriver.findElement(By.xpath("(//a[contains(text(),'View detail')])[2]")).click()  
  await commands.wait.byPageToComplete();
  await commands.measure.stop();
 
  await commands.measure.start('Add to cart');
  await seleniumDriver.findElement(By.xpath("//div[@id='productMain']/div[2]/div/p[3]/a")).click()
  await commands.wait.byPageToComplete();
  await seleniumDriver.findElement(By.xpath("//span[@id='numItemsInCart']")).click()
  await commands.wait.byPageToComplete();
  await commands.measure.stop();
 
 
  await commands.measure.start('Basket overview');
  await seleniumDriver.findElement(By.xpath('//div[@id=\'basket-overview\']/a')).click()
  await commands.wait.byPageToComplete();
  await commands.measure.stop();
 
  // await commands.measure.start('Update Cart');
  // await seleniumDriver.findElement(By.xpath("//a[@onclick='updateCart()']")).click()
  // await commands.measure.stop();
 
  await commands.measure.start('Pass order button');
  await seleniumDriver.findElement(By.id("orderButton")).click()
  await seleniumDriver.findElement(By.id("orderButton")).click()
  await commands.wait.byPageToComplete();
  await commands.measure.stop();
 
  await commands.measure.start('Logout');
  await seleniumDriver.findElement(By.linkText('Logout')).click()
  await commands.measure.stop();


}
