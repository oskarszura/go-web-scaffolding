Feature: User can access any sub page and be redirected when logged out
  As a user
  I want to visit random path
  And be redirected to the login page
  When I'm not logged in

  Scenario: Visit random page
    Given I'm not logged in
    When I visit random page
    Then I should be redirected to the login page
