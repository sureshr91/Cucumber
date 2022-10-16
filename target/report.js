$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/AmazonLogincredential.feature");
formatter.feature({
  "name": "To validate the amazon login functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@feature01"
    },
    {
      "name": "@feature02"
    }
  ]
});
formatter.scenario({
  "name": "To validate the valid email id and invalid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@feature01"
    },
    {
      "name": "@feature02"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To launch the chrome browser and hit amazon url",
  "keyword": "Given "
});
formatter.match({
  "location": "AmazonStepFile.toLaunchTheChromeBrowserAndHitAmazonUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass the valid email id to username field",
  "keyword": "When "
});
formatter.match({
  "location": "AmazonStepFile.toPassTheValidEmailIdToUsernameField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the continue button",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonStepFile.toClickTheContinueButton()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat org.stepdefinition.AmazonStepFile.toClickTheContinueButton(AmazonStepFile.java:27)\r\n\tat ✽.To click the continue button(src/test/resources/AmazonLogincredential.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "To pass the invalid password to password field",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonStepFile.toPassTheInvalidPasswordToPasswordField()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To click the sign-in button",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonStepFile.toClickTheSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To check the otp",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/FaceBookcredential.feature");
formatter.feature({
  "name": "To validate the facebook login functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@feature02"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To launch the browser and hit facebook url",
  "keyword": "Given "
});
formatter.match({
  "location": "FacebookStepFile.to_launch_the_browser_and_hit_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the invalid credential",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@feature02"
    },
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "To pass the invalid value to username field",
  "rows": [
    {
      "cells": [
        "email1",
        "sureshdpm230@gamil.com"
      ]
    },
    {
      "cells": [
        "email2",
        "java123@gmail.com"
      ]
    },
    {
      "cells": [
        "email3",
        "kumar123@gmil.com"
      ]
    },
    {
      "cells": [
        "email4",
        "hari123@gmail.com"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "FacebookStepFile.to_pass_the_invalid_value_to_username_field(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass the invalid value to password field",
  "rows": [
    {
      "cells": [
        "pass",
        "pass1",
        "pass2"
      ]
    },
    {
      "cells": [
        "64463243226",
        "652352165",
        "66767676"
      ]
    },
    {
      "cells": [
        "test123",
        "regression123",
        "vinod123"
      ]
    },
    {
      "cells": [
        "suresh123",
        "dinesh123",
        "sathish123"
      ]
    },
    {
      "cells": [
        "mathan123",
        "loganathan123",
        "selva123"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FacebookStepFile.to_pass_the_invalid_value_to_password_field(DataTable)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat org.stepdefinition.FacebookStepFile.to_pass_the_invalid_value_to_password_field(FacebookStepFile.java:38)\r\n\tat ✽.To pass the invalid value to password field(src/test/resources/FaceBookcredential.feature:13)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To execute the bulk execution",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "To pass\"\u003cusername\u003e\" the bulk data to username field",
  "keyword": "When "
});
formatter.step({
  "name": "To pass the bulk data to\"\u003cpassword\u003e\" password field",
  "keyword": "And "
});
formatter.step({
  "name": "To click the login button",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "java123@gmail.com",
        "java123"
      ]
    },
    {
      "cells": [
        "selenium123@gmail.com",
        "selenium123"
      ]
    },
    {
      "cells": [
        "sql1232gmail.com",
        "sql123"
      ]
    },
    {
      "cells": [
        "testng123@gmail.com",
        "testNg123"
      ]
    },
    {
      "cells": [
        "cucumber123@gmail.com",
        "cucumber123"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To launch the browser and hit facebook url",
  "keyword": "Given "
});
formatter.match({
  "location": "FacebookStepFile.to_launch_the_browser_and_hit_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To execute the bulk execution",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@feature02"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "To pass\"java123@gmail.com\" the bulk data to username field",
  "keyword": "When "
});
formatter.match({
  "location": "StepOutLIne.to_pass_the_bulk_data_to_username_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass the bulk data to\"java123\" password field",
  "keyword": "And "
});
formatter.match({
  "location": "StepOutLIne.to_pass_the_bulk_data_to_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookStepFile.to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To launch the browser and hit facebook url",
  "keyword": "Given "
});
formatter.match({
  "location": "FacebookStepFile.to_launch_the_browser_and_hit_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To execute the bulk execution",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@feature02"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "To pass\"selenium123@gmail.com\" the bulk data to username field",
  "keyword": "When "
});
formatter.match({
  "location": "StepOutLIne.to_pass_the_bulk_data_to_username_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass the bulk data to\"selenium123\" password field",
  "keyword": "And "
});
formatter.match({
  "location": "StepOutLIne.to_pass_the_bulk_data_to_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookStepFile.to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To launch the browser and hit facebook url",
  "keyword": "Given "
});
formatter.match({
  "location": "FacebookStepFile.to_launch_the_browser_and_hit_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To execute the bulk execution",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@feature02"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "To pass\"sql1232gmail.com\" the bulk data to username field",
  "keyword": "When "
});
formatter.match({
  "location": "StepOutLIne.to_pass_the_bulk_data_to_username_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass the bulk data to\"sql123\" password field",
  "keyword": "And "
});
formatter.match({
  "location": "StepOutLIne.to_pass_the_bulk_data_to_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookStepFile.to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To launch the browser and hit facebook url",
  "keyword": "Given "
});
formatter.match({
  "location": "FacebookStepFile.to_launch_the_browser_and_hit_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To execute the bulk execution",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@feature02"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "To pass\"testng123@gmail.com\" the bulk data to username field",
  "keyword": "When "
});
formatter.match({
  "location": "StepOutLIne.to_pass_the_bulk_data_to_username_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass the bulk data to\"testNg123\" password field",
  "keyword": "And "
});
formatter.match({
  "location": "StepOutLIne.to_pass_the_bulk_data_to_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookStepFile.to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To launch the browser and hit facebook url",
  "keyword": "Given "
});
formatter.match({
  "location": "FacebookStepFile.to_launch_the_browser_and_hit_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To execute the bulk execution",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@feature02"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "To pass\"cucumber123@gmail.com\" the bulk data to username field",
  "keyword": "When "
});
formatter.match({
  "location": "StepOutLIne.to_pass_the_bulk_data_to_username_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass the bulk data to\"cucumber123\" password field",
  "keyword": "And "
});
formatter.match({
  "location": "StepOutLIne.to_pass_the_bulk_data_to_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookStepFile.to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});