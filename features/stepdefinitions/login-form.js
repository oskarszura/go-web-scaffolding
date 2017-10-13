const Cucumber = require('cucumber');
const { By } = require('selenium-webdriver');

Cucumber.defineSupportCode((context) => {
  const given = context.Given;
  const when = context.When;
  const then = context.Then;

  given(/^I visit login page$/, (callback) => {
    this.driver
      .get('http://localhost:3222/login')
      .then(callback);
  });

  when(/^I fill up the login form with proper credentials and submit$/, function (callback) {
    this.driver.findElement(By.id('exampleInputEmail1'))
      .then((element) => {
        element.sendKeys('admin@localhost.pl');
      });

    this.driver.findElement(By.id('exampleInputPassword1'))
      .then((element) => {
        element.sendKeys('admin');
      });

    this.driver.findElement(By.id('login-submit'))
      .then((element) => {
        element.click()
          .then(callback);
      });
  });

  then(/^I should be redirected to the landing page$/, function (callback) {
    this.driver.getCurrentUrl()
      .then((currentUrl) => {
        if (currentUrl === 'http://localhost:3222/') {
          callback();
        }
      });
  });
});

