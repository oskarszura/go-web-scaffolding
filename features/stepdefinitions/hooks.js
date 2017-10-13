const Cucumber = require('cucumber');
const { Builder } = require('selenium-webdriver');

Cucumber.defineSupportCode((context) => {
  const setWorldConstructor = context.setWorldConstructor;
  const after = context.After;

  const CustomWorld = function () {
    this.driver = new Builder()
      .usingServer('http://localhost:4444/wd/hub')
      .forBrowser('chrome')
      .build();
  };

  setWorldConstructor(CustomWorld);

  after(function () {
    this.driver.quit();
  });
});
