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
 
  // To navigate to a new page it is best to use our navigation commands
  // so the script waits until the page is loaded
  const loginUrl = 'https://petstore.octoperf.com/'; 
  // await commands.measure.start('Login Page', { alias: loginUrl });
  await commands.navigate('https://petstore.octoperf.com/');
  await commands.wait.byPageToComplete();
  // Lets use Selenium to find the Documentation link
  const seleniumElement = await seleniumDriver.findElement(By.linkText('Enter the Store'));
  
  // So now we actually got a Selenium WebElement 
  // https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebElement.html
  // context.log.info('The element tag is ', await seleniumElement.getTagName());
  // We then use our command to start a measurement
 
  await commands.measure.start('TC-01-PreHome');
  // Use the Selenium WebElement and click on it
  await seleniumElement.click();
  // We make sure to wait for the new page to load
  await commands.wait.byPageToComplete();
  await commands.measure.stop();

  await commands.measure.start('TC-02-Home');
  await seleniumDriver.findElement(By.linkText("Sign In")).click()
  await commands.wait.byPageToComplete();
  await commands.measure.stop();

  await commands.measure.start('TC-03-Login');
  await seleniumDriver.findElement(By.name("username")).click()
  await seleniumDriver.findElement(By.name("username")).sendKeys("j2ee")
  await seleniumDriver.findElement(By.name("signon")).click()
  await commands.wait.byPageToComplete();
  await commands.measure.stop();

  await commands.measure.start('TC-04-SelectCategory');
  await seleniumDriver.findElement(By.css("#SidebarContent > a:nth-child(1) > img")).click()
  await commands.wait.byPageToComplete();
  await commands.measure.stop();

  await commands.measure.start('TC-05-SelectProduct');
  await seleniumDriver.findElement(By.linkText("FI-SW-01")).click()
  await commands.wait.byPageToComplete();
  await commands.measure.stop();

  await commands.measure.start('TC-06-SelectItem');
  await seleniumDriver.findElement(By.linkText("Add to Cart")).click()
  await commands.wait.byPageToComplete();
  await commands.measure.stop();

  await commands.measure.start('TC-07-UpdateCart');
  await seleniumDriver.findElement(By.name("updateCartQuantities")).click()
  await commands.wait.byPageToComplete();
  await commands.measure.stop();

  await commands.measure.start('TC-08-Checout');
  await seleniumDriver.findElement(By.linkText("Proceed to Checkout")).click()
  await commands.wait.byPageToComplete();
  await commands.measure.stop();

  await commands.measure.start('TC-09-PaymentDetails');
  await seleniumDriver.findElement(By.name("newOrder")).click()
  await commands.wait.byPageToComplete();
  await commands.measure.stop();

  await commands.measure.start('TC-10-Confirm');
  await seleniumDriver.findElement(By.linkText("Confirm")).click()
  await commands.wait.byPageToComplete();
  await commands.measure.stop();

  await commands.measure.start('TC-11-SignOut');
  await seleniumDriver.findElement(By.linkText("Return to Main Menu")).click()
  await commands.wait.byPageToComplete();
  await seleniumDriver.findElement(By.linkText("Sign Out")).click()
  await commands.measure.stop();
 
  // Stop the measuerment
  // return commands.measure.stop();
}
