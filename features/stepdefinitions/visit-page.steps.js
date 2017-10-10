const Cucumber = require('cucumber');
const { Builder, By } = require('selenium-webdriver');

Cucumber.defineSupportCode((context) => {
  const setWorldConstructor = context.setWorldConstructor;
  const given = context.Given;
  const when = context.When;
  const then = context.Then;

  let url = '';

  const CustomWorld = function () {
    this.driver = new Builder()
      .usingServer('http://localhost:4444/wd/hub')
      .forBrowser('chrome')
      .build();
  };

  setWorldConstructor(CustomWorld);

  given(/^I'm not logged in$/, () => {

  });

  when(/^I visit random page$/, function (callback) {
    this.driver
      .get('http://localhost:3222/random-url')
      .then(() => this.driver.getCurrentUrl())
      .then((currentUrl) => {
        url = currentUrl;
        callback();
      });
  });

  then(/^I should be redirected to the login page$/, (callback) => {
    if (url === 'http://localhost:3222/login') {
      callback();
    }
  });
});
