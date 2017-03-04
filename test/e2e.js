var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder().withCapabilities({
	browserName:"chrome",
	"chromeOptions":{
		args:["test-type"]
	}
}).build();

driver.get('http://localhost:8081/alles2016pk/thumbpraise/index.html');
//driver.findElement(By.id('kw')).sendKeys('webdriver');
driver.findElement(By.id('praise')).click();
driver.wait(until.titleIs('大拇指点赞'), 3000);
driver.quit();