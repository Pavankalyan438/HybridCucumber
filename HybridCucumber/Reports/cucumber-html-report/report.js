$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/TestCase.feature");
formatter.feature({
  "name": "To Test the OrangeHrm Application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To test the admin functionality of OrangeHrm",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "To open admin functionality of OrangeHrm",
  "keyword": "Given "
});
formatter.step({
  "name": "to enter \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "To enter UserRole",
  "keyword": "Then "
});
formatter.step({
  "name": "To Enter EmployeeName",
  "keyword": "Then "
});
formatter.step({
  "name": "Select Status",
  "keyword": "Then "
});
formatter.step({
  "name": "click the search button",
  "keyword": "Then "
});
formatter.step({
  "name": "take the screenshot and the title",
  "keyword": "Then "
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username"
      ]
    },
    {
      "cells": [
        "Pavan"
      ]
    },
    {
      "cells": [
        "Prakash"
      ]
    }
  ]
});
formatter.background({
  "name": "To Test the Login Function of OrangeHrm",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the browser and Navigate to the Url",
  "keyword": "Given "
});
formatter.match({
  "location": "com.step_definition.OrangeHrmlLoginSteps.to_launch_the_browser_and_Navigate_to_the_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Enter Username and Password",
  "keyword": "When "
});
formatter.match({
  "location": "com.step_definition.OrangeHrmlLoginSteps.to_Enter_Username_and_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Click the Submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_definition.OrangeHrmlLoginSteps.to_Click_the_Submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Take the Screenshot and the Title",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_definition.OrangeHrmlLoginSteps.to_Take_the_Screenshot_and_the_Title()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To test the admin functionality of OrangeHrm",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "To open admin functionality of OrangeHrm",
  "keyword": "Given "
});
formatter.match({
  "location": "com.step_definition.OrangeHrmAdminSteps.to_open_admin_functionality_of_OrangeHrm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to enter \"Pavan\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.step_definition.OrangeHrmAdminSteps.to_enter(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To enter UserRole",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_definition.OrangeHrmAdminSteps.to_enter_UserRole()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Enter EmployeeName",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_definition.OrangeHrmAdminSteps.to_Enter_EmployeeName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Status",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_definition.OrangeHrmAdminSteps.select_Status()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the search button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_definition.OrangeHrmAdminSteps.click_the_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take the screenshot and the title",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_definition.OrangeHrmAdminSteps.take_the_screenshot_and_the_title()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "com.step_definition.OrangeHrmAdminSteps.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "To Test the Login Function of OrangeHrm",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the browser and Navigate to the Url",
  "keyword": "Given "
});
formatter.match({
  "location": "com.step_definition.OrangeHrmlLoginSteps.to_launch_the_browser_and_Navigate_to_the_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Enter Username and Password",
  "keyword": "When "
});
formatter.match({
  "location": "com.step_definition.OrangeHrmlLoginSteps.to_Enter_Username_and_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Click the Submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_definition.OrangeHrmlLoginSteps.to_Click_the_Submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Take the Screenshot and the Title",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_definition.OrangeHrmlLoginSteps.to_Take_the_Screenshot_and_the_Title()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To test the admin functionality of OrangeHrm",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "To open admin functionality of OrangeHrm",
  "keyword": "Given "
});
formatter.match({
  "location": "com.step_definition.OrangeHrmAdminSteps.to_open_admin_functionality_of_OrangeHrm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to enter \"Prakash\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.step_definition.OrangeHrmAdminSteps.to_enter(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To enter UserRole",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_definition.OrangeHrmAdminSteps.to_enter_UserRole()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Enter EmployeeName",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_definition.OrangeHrmAdminSteps.to_Enter_EmployeeName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Status",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_definition.OrangeHrmAdminSteps.select_Status()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the search button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_definition.OrangeHrmAdminSteps.click_the_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take the screenshot and the title",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_definition.OrangeHrmAdminSteps.take_the_screenshot_and_the_title()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "com.step_definition.OrangeHrmAdminSteps.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
});