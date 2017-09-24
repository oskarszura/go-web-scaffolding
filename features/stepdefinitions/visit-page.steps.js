const Cucumber = require('cucumber');

Cucumber.defineSupportCode((context) => {
  const given = context.Given;
  const when = context.When;
  const then = context.Then;

  given(/^I'm logged out$/, () => {

  });

  when(/^I visit front page$/, () => {

  });

  then(/^I should be redirected to the login page$/, () => {

  });
});

