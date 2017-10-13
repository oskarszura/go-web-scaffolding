const Cucumber = require('cucumber');

Cucumber.defineSupportCode((context) => {
  const given = context.Given;
  const when = context.When;
  const then = context.Then;

  let url = '';

  given(/^I'm not logged in$/, function (callback) {
    const cookies = this.driver.manage().getCookies();
    const sessionCookie = cookies.sid;

    if (!sessionCookie) {
      callback();
    }
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
