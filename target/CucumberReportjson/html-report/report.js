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
formatter.step({
  "line": 29,
  "name": "I verify \"\u003cError\u003e\" for customername error message",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select \"\u003cGender\u003e\" in the Radio Button field",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I input \"\u003cbirthdate\u003e\" in the Date Of Birth field",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I input \"\u003caddress\u003e\" in the Address field",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I input \"\u003ccity\u003e\" in the City field",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I verify \"\u003cError\u003e\" for city error message",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I input \"\u003cstate\u003e\" in the State field",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I verify \"\u003cError\u003e\" for state error message",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I input \"\u003cpin\u003e\" in the PIN field",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I verify\"\u003cError\u003e\" for PIN error message",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I input \"\u003cphone\u003e\" in the Telephone No field",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I verify \"\u003cError\u003e\" for Telephone No message",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I input \"\u003cemail\u003e\" in the Email field",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "I verify \"\u003cError\u003e\" for Email error message",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I click on Submit Button",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 48,
  "name": "",
  "description": "",
  "id": "effect-transactions-on-gtpl-bank-website;adding-a-new-customer;",
  "rows": [
    {
      "cells": [
        "userid",
        "password",
        "customername",
        "Gender",
        "Error",
        "birthdate",
        "address",
        "city",
        "state",
        "pin",
        "phone",
        "email"
      ],
      "line": 49,
      "id": "effect-transactions-on-gtpl-bank-website;adding-a-new-customer;;1"
    },
    {
      "comments": [
        {
          "line": 50,
          "value": "#\t\t\t|\tmngr359969\t|\tUjyvada\t|\t\t\t\t\t\t|\tmale\t|\tCustomer name must not be blank\t|\t7/12/1984\t|\tRoyal Road\t|\tNew York\t|\tCape Town\t\t|\t147852\t|\t5986254785\t|\trasddasd@mu.com\t\t\t|"
        },
        {
          "line": 51,
          "value": "#\t\t\t|\tmngr359969\t|\tUjyvada\t|\t\t\t\t\t\t|\tmale\t|\tCustomer name must not be blank\t|\t7/12/1984\t|\tRoyal Road\t|\tNew York\t|\tCape Town\t\t|\t147852\t|\t5986254785\t|\trasddasd@mu.com\t\t\t|"
        },
        {
          "line": 52,
          "value": "#\t\t\t|\tmngr359969\t|\tUjyvada\t|\t145823\t\t\t\t|\tmale\t|\tNumbers are not allowed\t\t\t|\t8/10/2001\t|\tRoyal Road\t|\tNew York\t|\tCape Town\t\t|\t147852\t|\t5986254785\t|\trasddasd@mu.com\t\t\t|"
        },
        {
          "line": 53,
          "value": "#\t\t\t|\tmngr359969\t|\tUjyvada\t|\tEric Cantona\t\t|\tmale\t|\t\t\t\t\t\t\t\t\t|\t6/4/1999\t|\tRoyal Road\t|\tNew York\t|\tCape Town\t\t|\t147852\t|\t5986254785\t|\trasddasd@mu.com\t\t\t|"
        },
        {
          "line": 54,
          "value": "#\t\t\t|\tmngr359969\t|\tUjyvada\t|\tDisha Patani\t\t|\tfemale\t|\t\t\t\t\t\t\t\t\t|\t7/10/1980\t|\tRoyal Road\t|\tNew York\t|\tCape Town\t\t|\t147852\t|\t5986254785\t|\trasddasd@mu.com\t\t\t|"
        },
        {
          "line": 55,
          "value": "#\t\t\t|\tmngr359969\t|\tUjyvada\t|\tEric Cantona\t\t|\tmale\t|\tCity Field must be not blank\t|\t9/16/1979\t|\tRoyal Road\t|\t\t\t\t|\tCape Town\t\t|\t147852\t|\t5986254785\t|\trasddasd@mu.com\t\t\t|"
        },
        {
          "line": 56,
          "value": "#\t\t\t|\tmngr359969\t|\tUjyvada\t|\tEric Cantona\t\t|\tmale\t|\tNumbers are not allowed\t\t\t|\t7/12/1984\t|\tRoyal Road\t|\t12545\t\t|\tCape Town\t\t|\t147852\t|\t5986254785\t|\trasddasd@mu.com\t\t\t|"
        }
      ],
      "cells": [
        "mngr359969",
        "Ujyvada",
        "Sunny Leone",
        "female",
        "",
        "1984/12/07",
        "Royal Road",
        "New York",
        "Cape Town",
        "147852",
        "5986254785",
        "rasddasd@mu.com"
      ],
      "line": 57,
      "id": "effect-transactions-on-gtpl-bank-website;adding-a-new-customer;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 80000,
  "status": "passed"
});
formatter.before({
  "duration": 19000,
  "status": "passed"
});
formatter.before({
  "duration": 21300,
  "status": "passed"
});
formatter.before({
  "duration": 9500,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 50,
      "value": "#\t\t\t|\tmngr359969\t|\tUjyvada\t|\t\t\t\t\t\t|\tmale\t|\tCustomer name must not be blank\t|\t7/12/1984\t|\tRoyal Road\t|\tNew York\t|\tCape Town\t\t|\t147852\t|\t5986254785\t|\trasddasd@mu.com\t\t\t|"
    },
    {
      "line": 51,
      "value": "#\t\t\t|\tmngr359969\t|\tUjyvada\t|\t\t\t\t\t\t|\tmale\t|\tCustomer name must not be blank\t|\t7/12/1984\t|\tRoyal Road\t|\tNew York\t|\tCape Town\t\t|\t147852\t|\t5986254785\t|\trasddasd@mu.com\t\t\t|"
    },
    {
      "line": 52,
      "value": "#\t\t\t|\tmngr359969\t|\tUjyvada\t|\t145823\t\t\t\t|\tmale\t|\tNumbers are not allowed\t\t\t|\t8/10/2001\t|\tRoyal Road\t|\tNew York\t|\tCape Town\t\t|\t147852\t|\t5986254785\t|\trasddasd@mu.com\t\t\t|"
    },
    {
      "line": 53,
      "value": "#\t\t\t|\tmngr359969\t|\tUjyvada\t|\tEric Cantona\t\t|\tmale\t|\t\t\t\t\t\t\t\t\t|\t6/4/1999\t|\tRoyal Road\t|\tNew York\t|\tCape Town\t\t|\t147852\t|\t5986254785\t|\trasddasd@mu.com\t\t\t|"
    },
    {
      "line": 54,
      "value": "#\t\t\t|\tmngr359969\t|\tUjyvada\t|\tDisha Patani\t\t|\tfemale\t|\t\t\t\t\t\t\t\t\t|\t7/10/1980\t|\tRoyal Road\t|\tNew York\t|\tCape Town\t\t|\t147852\t|\t5986254785\t|\trasddasd@mu.com\t\t\t|"
    },
    {
      "line": 55,
      "value": "#\t\t\t|\tmngr359969\t|\tUjyvada\t|\tEric Cantona\t\t|\tmale\t|\tCity Field must be not blank\t|\t9/16/1979\t|\tRoyal Road\t|\t\t\t\t|\tCape Town\t\t|\t147852\t|\t5986254785\t|\trasddasd@mu.com\t\t\t|"
    },
    {
      "line": 56,
      "value": "#\t\t\t|\tmngr359969\t|\tUjyvada\t|\tEric Cantona\t\t|\tmale\t|\tNumbers are not allowed\t\t\t|\t7/12/1984\t|\tRoyal Road\t|\t12545\t\t|\tCape Town\t\t|\t147852\t|\t5986254785\t|\trasddasd@mu.com\t\t\t|"
    }
  ],
  "line": 57,
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
  "name": "I enter \"mngr359969\" userID and password \"Ujyvada\"",
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
  "name": "I enter \"Sunny Leone\" in the Customer Name field",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I verify \"\" for customername error message",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select \"female\" in the Radio Button field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I input \"1984/12/07\" in the Date Of Birth field",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I input \"Royal Road\" in the Address field",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I input \"New York\" in the City field",
  "matchedColumns": [
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I verify \"\" for city error message",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I input \"Cape Town\" in the State field",
  "matchedColumns": [
    8
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I verify \"\" for state error message",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I input \"147852\" in the PIN field",
  "matchedColumns": [
    9
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I verify\"\" for PIN error message",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I input \"5986254785\" in the Telephone No field",
  "matchedColumns": [
    10
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I verify \"\" for Telephone No message",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I input \"rasddasd@mu.com\" in the Email field",
  "matchedColumns": [
    11
  ],
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "I verify \"\" for Email error message",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I click on Submit Button",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Tests_Steps.i_am_on_GTPL_Bank_website()"
});
formatter.result({
  "duration": 4372053700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mngr359969",
      "offset": 9
    },
    {
      "val": "Ujyvada",
      "offset": 42
    }
  ],
  "location": "Tests_Steps.i_enter_userID_and_password(String,String)"
});
formatter.result({
  "duration": 1422276200,
  "status": "passed"
});
formatter.match({
  "location": "Tests_Steps.the_Manager_Page_is_displayed()"
});
formatter.result({
  "duration": 24146100,
  "status": "passed"
});
formatter.match({
  "location": "Tests_Steps.i_click_on_New_Customer()"
});
formatter.result({
  "duration": 610176600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sunny Leone",
      "offset": 9
    }
  ],
  "location": "Tests_Steps.i_enter_in_the_Customer_Name_field(String)"
});
formatter.result({
  "duration": 222111900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 10
    }
  ],
  "location": "Tests_Steps.i_verify_for_customername_error_message(String)"
});
formatter.result({
  "duration": 132000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "female",
      "offset": 10
    }
  ],
  "location": "Tests_Steps.i_select_in_the_Radio_Button_field(String)"
});
formatter.result({
  "duration": 83050900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1984/12/07",
      "offset": 9
    }
  ],
  "location": "Tests_Steps.i_input_in_the_Date_Of_Birth_field(String)"
});
formatter.result({
  "duration": 88316100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Royal Road",
      "offset": 9
    }
  ],
  "location": "Tests_Steps.i_input_in_the_Address_field(String)"
});
formatter.result({
  "duration": 84463100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New York",
      "offset": 9
    }
  ],
  "location": "Tests_Steps.i_input_in_the_City_field(String)"
});
formatter.result({
  "duration": 179385100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 10
    }
  ],
  "location": "Tests_Steps.i_verify_for_city_error_message(String)"
});
formatter.result({
  "duration": 804400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cape Town",
      "offset": 9
    }
  ],
  "location": "Tests_Steps.i_input_in_the_State_field(String)"
});
formatter.result({
  "duration": 183511800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 10
    }
  ],
  "location": "Tests_Steps.i_verify_for_state_error_message(String)"
});
formatter.result({
  "duration": 68700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "147852",
      "offset": 9
    }
  ],
  "location": "Tests_Steps.i_input_in_the_PIN_field(String)"
});
formatter.result({
  "duration": 183847000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 9
    }
  ],
  "location": "Tests_Steps.i_verify_for_PIN_error_message(String)"
});
formatter.result({
  "duration": 91600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5986254785",
      "offset": 9
    }
  ],
  "location": "Tests_Steps.i_input_in_the_Telephone_No_field(String)"
});
formatter.result({
  "duration": 179654200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 10
    }
  ],
  "location": "Tests_Steps.i_verify_for_Telephone_No_message(String)"
});
formatter.result({
  "duration": 115800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rasddasd@mu.com",
      "offset": 9
    }
  ],
  "location": "Tests_Steps.i_input_in_the_Email_field(String)"
});
formatter.result({
  "duration": 189478200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 10
    }
  ],
  "location": "Tests_Steps.i_verify_for_Email_error_message(String)"
});
formatter.result({
  "duration": 333558700,
  "status": "passed"
});
formatter.match({
  "location": "Tests_Steps.i_click_on_Submit_Button()"
});
formatter.result({
  "duration": 250082743700,
  "status": "passed"
});
formatter.match({
  "location": "Tests_Steps.i_close_the_browser()"
});
formatter.result({
  "duration": 1679462200,
  "status": "passed"
});
formatter.after({
  "duration": 152439900,
  "status": "passed"
});
formatter.after({
  "duration": 61000,
  "status": "passed"
});
formatter.after({
  "duration": 1788600,
  "status": "passed"
});
formatter.after({
  "duration": 46600,
  "status": "passed"
});
});