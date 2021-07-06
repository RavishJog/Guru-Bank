$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Telecom.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#As a user,"
    },
    {
      "line": 2,
      "value": "#I want to be able to access the website of GTPL Bank,"
    },
    {
      "line": 3,
      "value": "#So that, I Can access the main page for transactions"
    }
  ],
  "line": 6,
  "name": "Telecom Project",
  "description": "",
  "id": "telecom-project",
  "keyword": "Feature",
  "tags": [
    {
      "line": 5,
      "name": "@ExecutionatFeatureLevel"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 8,
      "value": "#Scenario1"
    }
  ],
  "line": 10,
  "name": "Accessing the Telecom page to create a new Customer",
  "description": "",
  "id": "telecom-project;accessing-the-telecom-page-to-create-a-new-customer",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@AddCustomer"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on Guru99 telecom",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Add Customer",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "The Add Customer Page is display",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I select \"\u003cstatus\u003e\" status",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I enter \"\u003cFirstName\u003e\" in FName field and I enter \"\u003cLastName\u003e\" in LName field",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I enter \"\u003cEmailAddress\u003e\" for email address",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I enter \"\u003caddress\u003e\" in the address box",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter \"\u003cMobileNumber\u003e\" in the Mobile number box",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on Submit Button",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "telecom-project;accessing-the-telecom-page-to-create-a-new-customer;",
  "rows": [
    {
      "cells": [
        "status",
        "FirstName",
        "LastName",
        "EmailAddress"
      ],
      "line": 23,
      "id": "telecom-project;accessing-the-telecom-page-to-create-a-new-customer;;1"
    },
    {
      "cells": [
        "Pending",
        "Robert",
        "Pattison",
        "RobP@gmail.com"
      ],
      "line": 24,
      "id": "telecom-project;accessing-the-telecom-page-to-create-a-new-customer;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 144900,
  "status": "passed"
});
formatter.before({
  "duration": 42500,
  "status": "passed"
});
formatter.before({
  "duration": 57100,
  "status": "passed"
});
formatter.before({
  "duration": 35600,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Accessing the Telecom page to create a new Customer",
  "description": "",
  "id": "telecom-project;accessing-the-telecom-page-to-create-a-new-customer;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@ExecutionatFeatureLevel"
    },
    {
      "line": 9,
      "name": "@AddCustomer"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on Guru99 telecom",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Add Customer",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "The Add Customer Page is display",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I select \"Pending\" status",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I enter \"Robert\" in FName field and I enter \"Pattison\" in LName field",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I enter \"RobP@gmail.com\" for email address",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I enter \"\u003caddress\u003e\" in the address box",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter \"\u003cMobileNumber\u003e\" in the Mobile number box",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on Submit Button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "99",
      "offset": 12
    }
  ],
  "location": "Tests_Steps_Telecom.i_am_on_Guru_telecom(int)"
});
formatter.result({
  "duration": 6746143200,
  "status": "passed"
});
formatter.match({
  "location": "Tests_Steps_Telecom.i_click_on_Add_Customer()"
});
formatter.result({
  "duration": 1373292600,
  "status": "passed"
});
formatter.match({
  "location": "Tests_Steps_Telecom.the_Add_Customer_Page_is_display()"
});
formatter.result({
  "duration": 212819500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pending",
      "offset": 10
    }
  ],
  "location": "Tests_Steps_Telecom.iSelectStatus(String)"
});
formatter.result({
  "duration": 269625900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Robert",
      "offset": 9
    },
    {
      "val": "Pattison",
      "offset": 45
    }
  ],
  "location": "Tests_Steps_Telecom.iEnterInFNameFieldAndIEnterInLNameField(String,String)"
});
formatter.result({
  "duration": 406648600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RobP@gmail.com",
      "offset": 9
    }
  ],
  "location": "Tests_Steps_Telecom.iEnterForEmailAddress(String)"
});
formatter.result({
  "duration": 249203600,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "Tests_Steps.i_click_on_Submit_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 297866600,
  "status": "passed"
});
formatter.after({
  "duration": 122000,
  "status": "passed"
});
formatter.after({
  "duration": 6322900,
  "status": "passed"
});
formatter.after({
  "duration": 84200,
  "status": "passed"
});
});