Feature: User can access any sub page and be redirected when logged out
  As a user
  I want to visit any page
  And be redirected when logged out

  Scenario: Visit front page
    Given I'm logged out
    When I visit front page
    Then I should be redirected to the login page
