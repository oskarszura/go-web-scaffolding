Feature: User can log in to the platform via login form
  As a user
  I want to visit login page
  And be logged in
  When I'm submitting the form properly

  Scenario: Visit login page
    Given I visit random page
    Given I'm not logged in
    When I fill up the login form with proper credentials and submit
    Then I should be redirected to the landing page
