var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
	.forBrowser('chrome')
    .build();

driver.get('http://localhost:3000/index');
//driver.findElement(By.id('kw')).sendKeys('webdriver');
driver.findElement(By.id('praise')).click();
driver.wait(until.titleIs('大拇指点赞'), 3000);
driver.quit();