@feature02
Feature: To validate the facebook login functionality

  Background: 
    Given To launch the browser and hit facebook url
  @sanity 
  Scenario: To validate the invalid credential
    When To pass the invalid value to username field
      | email1 | sureshdpm230@gamil.com |
      | email2 | java123@gmail.com      |
      | email3 | kumar123@gmil.com      |
      | email4 | hari123@gmail.com      |
    And To pass the invalid value to password field
      | pass        | pass1         | pass2      |
      | 64463243226 |     652352165 |   66767676 |
      | test123     | regression123 | vinod123   |
      | suresh123   | dinesh123     | sathish123 |
      | mathan123   | loganathan123 | selva123   |
  @smoke
  Scenario Outline: To execute the bulk execution
    When To pass"<username>" the bulk data to username field
    And To pass the bulk data to"<password>" password field
    And To click the login button

    Examples: 
      | username              | password    |
      | java123@gmail.com     | java123     |
      | selenium123@gmail.com | selenium123 |
      | sql1232gmail.com      | sql123      |
      | testng123@gmail.com   | testNg123   |
      | cucumber123@gmail.com | cucumber123 |
