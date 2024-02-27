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
  await commands.navigate('https://petstore.octoperf.com/');
 
  // Lets use Selenium to find the Documentation link
  const seleniumElement = await seleniumDriver.findElement(By.linkText('Enter the Store'));
  
  // So now we actually got a Selenium WebElement 
  // https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebElement.html
  context.log.info('The element tag is ', await seleniumElement.getTagName());
 
  // We then use our command to start a measurement
  await commands.measure.start('petStorePage');
 
  // Use the Selenium WebElement and click on it
  await seleniumElement.click();
  // We make sure to wait for the new page to load
  await commands.wait.byPageToComplete();
  await seleniumDriver.findElement(By.linkText("Sign In")).click()
  await commands.wait.byPageToComplete();
  await seleniumDriver.findElement(By.id("stripes-768273790")).click()
  await seleniumDriver.findElement(By.id("stripes-768273790")).sendKeys("j2ee")
  await seleniumDriver.findElement(By.name("signon")).click()
  await commands.wait.byPageToComplete();
  await seleniumDriver.findElement(By.css("#SidebarContent > a:nth-child(1) > img")).click()
  await commands.wait.byPageToComplete();
  await seleniumDriver.findElement(By.linkText("FI-SW-01")).click()
  await commands.wait.byPageToComplete();
  await seleniumDriver.findElement(By.linkText("Add to Cart")).click()
  await commands.wait.byPageToComplete();
  await seleniumDriver.findElement(By.name("updateCartQuantities")).click()
  await commands.wait.byPageToComplete();
  await seleniumDriver.findElement(By.linkText("Proceed to Checkout")).click()
  await commands.wait.byPageToComplete();
  await seleniumDriver.findElement(By.name("newOrder")).click()
  await commands.wait.byPageToComplete();
  await seleniumDriver.findElement(By.linkText("Confirm")).click()
  await commands.wait.byPageToComplete();
  await seleniumDriver.findElement(By.linkText("Return to Main Menu")).click()
  await commands.wait.byPageToComplete();
  await seleniumDriver.findElement(By.linkText("Sign Out")).click()
 
  // Stop the measuerment
  return commands.measure.stop();
}