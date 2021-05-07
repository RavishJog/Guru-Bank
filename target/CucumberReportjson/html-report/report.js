$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/GTPL.feature");
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
  "name": "Effect transactions on GTPL Bank website",
  "description": "",
  "id": "effect-transactions-on-gtpl-bank-website",
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
    },
    {
      "line": 9,
      "value": "#\t@Login"
    },
    {
      "line": 10,
      "value": "#\tScenario Outline: Accessing the Registration page to create a new Customer"
    },
    {
      "line": 11,
      "value": "#"
    },
    {
      "line": 12,
      "value": "#\t\tGiven I am on GTPL Bank website"
    },
    {
      "line": 13,
      "value": "#\t\tWhen I enter \"\u003cuserid\u003e\" userID and password \"\u003cpassword\u003e\""
    },
    {
      "line": 14,
      "value": "#\t\tThen The Manager Page is displayed"
    },
    {
      "line": 15,
      "value": "#"
    },
    {
      "line": 16,
      "value": "#\t\tExamples:"
    },
    {
      "line": 17,
      "value": "#\t\t\t|userid\t\t\t|password\t| customername |"
    },
    {
      "line": 18,
      "value": "#\t\t\t|mngr325061 \t|EnabagE    | John Doe\t\t|"
    },
    {
      "line": 21,
      "value": "#Scenario2"
    }
  ],
  "line": 23,
  "name": "Adding a New Customer",
  "description": "",
  "id": "effect-transactions-on-gtpl-bank-website;adding-a-new-customer",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@Execute"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I am on GTPL Bank website",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I enter \"\u003cuserid\u003e\" userID and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "The Manager Page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I click on New Customer",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I enter \"\u003ccustomername\u003e\" in the Customer Name field",
  "keyword": "When "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "effect-transactions-on-gtpl-bank-website;adding-a-new-customer;",
  "rows": [
    {
      "cells": [
        "userid",
        "password",
        "customername"
      ],
      "line": 33,
      "id": "effect-transactions-on-gtpl-bank-website;adding-a-new-customer;;1"
    },
    {
      "cells": [
        "mngr325061",
        "EnabagE",
        "John Doe"
      ],
      "line": 34,
      "id": "effect-transactions-on-gtpl-bank-website;adding-a-new-customer;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 488600,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Adding a New Customer",
  "description": "",
  "id": "effect-transactions-on-gtpl-bank-website;adding-a-new-customer;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@ExecutionatFeatureLevel"
    },
    {
      "line": 22,
      "name": "@Execute"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I am on GTPL Bank website",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I enter \"mngr325061\" userID and password \"EnabagE\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "The Manager Page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I click on New Customer",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I enter \"John Doe\" in the Customer Name field",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Tests_Steps.i_am_on_GTPL_Bank_website()"
});
formatter.result({
  "duration": 11108568800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mngr325061",
      "offset": 9
    },
    {
      "val": "EnabagE",
      "offset": 42
    }
  ],
  "location": "Tests_Steps.i_enter_userID_and_password(String,String)"
});
formatter.result({
  "duration": 2771243800,
  "status": "passed"
});
formatter.match({
  "location": "Tests_Steps.the_Manager_Page_is_displayed()"
});
formatter.result({
  "duration": 68040300,
  "status": "passed"
});
formatter.match({
  "location": "Tests_Steps.i_click_on_New_Customer()"
});
formatter.result({
  "duration": 863212500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John Doe",
      "offset": 9
    }
  ],
  "location": "Tests_Steps.i_enter_in_the_Customer_Name_field(String)"
});
formatter.result({
  "duration": 200898700,
  "status": "passed"
});
});