@feature01 @feature02
Feature: To validate the amazon login functionality
  @regression
  Scenario: To validate the valid email id and invalid password
    Given To launch the chrome browser and hit amazon url
    When To pass the valid email id to username field
    And To click the continue button
    And To pass the invalid password to password field
    And To click the sign-in button
    And To check the otp
