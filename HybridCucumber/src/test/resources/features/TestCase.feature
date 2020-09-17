Feature: To Test the OrangeHrm Application

Background: To Test the Login Function of OrangeHrm
Given To launch the browser and Navigate to the Url
When To Enter Username and Password
Then To Click the Submit button
Then To Take the Screenshot and the Title


Scenario Outline: To test the admin functionality of OrangeHrm
Given To open admin functionality of OrangeHrm
When to enter "<username>"
Then To enter UserRole
Then To Enter EmployeeName
Then Select Status
Then click the search button
Then take the screenshot and the title
And close the browser

Examples:
|username|
|Pavan|
|Prakash|