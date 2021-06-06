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
  "comments": [
    {
      "line": 43,
      "value": "#\t\tThen I click on Submit Button"
    }
  ],
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
          "value": "#\t\t\t|\tmngr330703\t|\tgyqazun\t|\t\t\t\t\t\t|\tmale\t|\tCustomer name must not be blank\t|\t7/12/1984\t|\tRoyal Road\t|\tNew York\t|\tCape Town\t\t|\t147852\t|\t5986254785\t|\trasddasd@mu.com\t\t\t|"
        },
        {
          "line": 51,
          "value": "#\t\t\t|\tmngr330703\t|\tgyqazun\t|\t\t\t\t\t\t|\tmale\t|\tCustomer name must not be blank\t|\t7/12/1984\t|\tRoyal Road\t|\tNew York\t|\tCape Town\t\t|\t147852\t|\t5986254785\t|\trasddasd@mu.com\t\t\t|"
        },
        {
          "line": 52,
          "value": "#\t\t\t|\tmngr330703\t|\tgyqazun\t|\t145823\t\t\t\t|\tmale\t|\tNumbers are not allowed\t\t\t|\t8/10/2001\t|\tRoyal Road\t|\tNew York\t|\tCape Town\t\t|\t147852\t|\t5986254785\t|\trasddasd@mu.com\t\t\t|"
        },
        {
          "line": 53,
          "value": "#\t\t\t|\tmngr330703\t|\tgyqazun\t|\tEric Cantona\t\t|\tmale\t|\t\t\t\t\t\t\t\t\t|\t6/4/1999\t|\tRoyal Road\t|\tNew York\t|\tCape Town\t\t|\t147852\t|\t5986254785\t|\trasddasd@mu.com\t\t\t|"
        },
        {
          "line": 54,
          "value": "#\t\t\t|\tmngr330703\t|\tgyqazun\t|\tDisha Patani\t\t|\tfemale\t|\t\t\t\t\t\t\t\t\t|\t7/10/1980\t|\tRoyal Road\t|\tNew York\t|\tCape Town\t\t|\t147852\t|\t5986254785\t|\trasddasd@mu.com\t\t\t|"
        },
        {
          "line": 55,
          "value": "#\t\t\t|\tmngr330703\t|\tgyqazun\t|\tEric Cantona\t\t|\tmale\t|\tCity Field must be not blank\t|\t9/16/1979\t|\tRoyal Road\t|\t\t\t\t|\tCape Town\t\t|\t147852\t|\t5986254785\t|\trasddasd@mu.com\t\t\t|"
        },
        {
          "line": 56,
          "value": "#\t\t\t|\tmngr330703\t|\tgyqazun\t|\tEric Cantona\t\t|\tmale\t|\tNumbers are not allowed\t\t\t|\t7/12/1984\t|\tRoyal Road\t|\t12545\t\t|\tCape Town\t\t|\t147852\t|\t5986254785\t|\trasddasd@mu.com\t\t\t|"
        },
        {
          "line": 57,
          "value": "#\t\t\t|\tmngr330703\t|\tgyqazun\t|\tSunny Leone\t\t\t|\tfemale\t|\t\t\t\t\t\t\t\t\t|\t7/12/1984\t|\tRoyal Road\t|\tNew York\t|\tCape Town\t\t|\t147852\t|\t5986254785\t|\trasddasd@mu.com\t\t\t|"
        },
        {
          "line": 58,
          "value": "#\t\t\t|\tmngr330703\t|\tgyqazun\t|\tEric Cantona\t\t|\tmale\t|\tState must not be blank\t\t\t|\t7/12/1984\t|\tRoyal Road\t|\tNew York\t|\t\t\t\t\t|\t147852\t|\t5986254785\t|\trasddasd@mu.com\t\t\t|"
        },
        {
          "line": 59,
          "value": "#\t\t\t|\tmngr330703\t|\tgyqazun\t|\tSunny Leone\t\t\t|\tfemale\t|\tNumbers are not allowed\t\t\t|\t7/12/1984\t|\tRoyal Road\t|\tNew York\t|\t458965\t\t\t|\t147852\t|\t5986254785\t|\trasddasd@mu.com\t\t\t|"
        },
        {
          "line": 60,
          "value": "#\t\t\t|\tmngr330703\t|\tgyqazun\t|\tMaisha Joggessur\t|\tfemale\t|\t\t\t\t\t\t\t\t\t|\t12/6/2010\t|\tBassin Road\t|\tWestside\t|\tJohannesburg\t|\t785496\t|\t5471582369\t|\tmjoggessur@gmail.com\t|"
        },
        {
          "line": 61,
          "value": "#\t\t\t|\tmngr330703\t|\tgyqazun\t|\tChristiano Ronaldo\t|\tmale\t|\tPIN Code must not be blank\t\t|\t12/6/2010\t|\tBassin Road\t|\tWestside\t|\tJohannesburg\t|\t\t\t|\t5471582369\t|\tmjoggessur@gmail.com\t|"
        },
        {
          "line": 62,
          "value": "#\t\t\t|\tmngr330703\t|\tgyqazun\t|\tChristiano Ronaldo\t|\tmale\t|\tCharacters are not allowed\t\t|\t12/6/2010\t|\tBassin Road\t|\tWestside\t|\tJohannesburg\t|\tasddsa\t|\t5471582369\t|\tmjoggessur@gmail.com\t|"
        },
        {
          "line": 63,
          "value": "#\t\t\t|\tmngr330703\t|\tgyqazun\t|\tChristiano Ronaldo\t|\tmale\t|\tPIN Code must have 6 Digits\t\t|\t12/6/2010\t|\tBassin Road\t|\tWestside\t|\tJohannesburg\t|\t12345\t|\t5471582369\t|\tmjoggessur@gmail.com\t|"
        }
      ],
      "cells": [
        "mngr330703",
        "gyqazun",
        "Christiano Ronaldo",
        "male",
        "",
        "12/6/2010",
        "Bassin Road",
        "Westside",
        "Johannesburg",
        "789456",
        "5471582369",
        "mjoggessur@gmail.com"
      ],
      "line": 64,
      "id": "effect-transactions-on-gtpl-bank-website;adding-a-new-customer;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 201800,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 50,
      "value": "#\t\t\t|\tmngr330703\t|\tgyqazun\t|\t\t\t\t\t\t|\tmale\t|\tCustomer name must not be blank\t|\t7/12/1984\t|\tRoyal Road\t|\tNew York\t|\tCape Town\t\t|\t147852\t|\t5986254785\t|\trasddasd@mu.com\t\t\t|"
    },
    {
      "line": 51,
      "value": "#\t\t\t|\tmngr330703\t|\tgyqazun\t|\t\t\t\t\t\t|\tmale\t|\tCustomer name must not be blank\t|\t7/12/1984\t|\tRoyal Road\t|\tNew York\t|\tCape Town\t\t|\t147852\t|\t5986254785\t|\trasddasd@mu.com\t\t\t|"
    },
    {
      "line": 52,
      "value": "#\t\t\t|\tmngr330703\t|\tgyqazun\t|\t145823\t\t\t\t|\tmale\t|\tNumbers are not allowed\t\t\t|\t8/10/2001\t|\tRoyal Road\t|\tNew York\t|\tCape Town\t\t|\t147852\t|\t5986254785\t|\trasddasd@mu.com\t\t\t|"
    },
    {
      "line": 53,
      "value": "#\t\t\t|\tmngr330703\t|\tgyqazun\t|\tEric Cantona\t\t|\tmale\t|\t\t\t\t\t\t\t\t\t|\t6/4/1999\t|\tRoyal Road\t|\tNew York\t|\tCape Town\t\t|\t147852\t|\t5986254785\t|\trasddasd@mu.com\t\t\t|"
    },
    {
      "line": 54,
      "value": "#\t\t\t|\tmngr330703\t|\tgyqazun\t|\tDisha Patani\t\t|\tfemale\t|\t\t\t\t\t\t\t\t\t|\t7/10/1980\t|\tRoyal Road\t|\tNew York\t|\tCape Town\t\t|\t147852\t|\t5986254785\t|\trasddasd@mu.com\t\t\t|"
    },
    {
      "line": 55,
      "value": "#\t\t\t|\tmngr330703\t|\tgyqazun\t|\tEric Cantona\t\t|\tmale\t|\tCity Field must be not blank\t|\t9/16/1979\t|\tRoyal Road\t|\t\t\t\t|\tCape Town\t\t|\t147852\t|\t5986254785\t|\trasddasd@mu.com\t\t\t|"
    },
    {
      "line": 56,
      "value": "#\t\t\t|\tmngr330703\t|\tgyqazun\t|\tEric Cantona\t\t|\tmale\t|\tNumbers are not allowed\t\t\t|\t7/12/1984\t|\tRoyal Road\t|\t12545\t\t|\tCape Town\t\t|\t147852\t|\t5986254785\t|\trasddasd@mu.com\t\t\t|"
    },
    {
      "line": 57,
      "value": "#\t\t\t|\tmngr330703\t|\tgyqazun\t|\tSunny Leone\t\t\t|\tfemale\t|\t\t\t\t\t\t\t\t\t|\t7/12/1984\t|\tRoyal Road\t|\tNew York\t|\tCape Town\t\t|\t147852\t|\t5986254785\t|\trasddasd@mu.com\t\t\t|"
    },
    {
      "line": 58,
      "value": "#\t\t\t|\tmngr330703\t|\tgyqazun\t|\tEric Cantona\t\t|\tmale\t|\tState must not be blank\t\t\t|\t7/12/1984\t|\tRoyal Road\t|\tNew York\t|\t\t\t\t\t|\t147852\t|\t5986254785\t|\trasddasd@mu.com\t\t\t|"
    },
    {
      "line": 59,
      "value": "#\t\t\t|\tmngr330703\t|\tgyqazun\t|\tSunny Leone\t\t\t|\tfemale\t|\tNumbers are not allowed\t\t\t|\t7/12/1984\t|\tRoyal Road\t|\tNew York\t|\t458965\t\t\t|\t147852\t|\t5986254785\t|\trasddasd@mu.com\t\t\t|"
    },
    {
      "line": 60,
      "value": "#\t\t\t|\tmngr330703\t|\tgyqazun\t|\tMaisha Joggessur\t|\tfemale\t|\t\t\t\t\t\t\t\t\t|\t12/6/2010\t|\tBassin Road\t|\tWestside\t|\tJohannesburg\t|\t785496\t|\t5471582369\t|\tmjoggessur@gmail.com\t|"
    },
    {
      "line": 61,
      "value": "#\t\t\t|\tmngr330703\t|\tgyqazun\t|\tChristiano Ronaldo\t|\tmale\t|\tPIN Code must not be blank\t\t|\t12/6/2010\t|\tBassin Road\t|\tWestside\t|\tJohannesburg\t|\t\t\t|\t5471582369\t|\tmjoggessur@gmail.com\t|"
    },
    {
      "line": 62,
      "value": "#\t\t\t|\tmngr330703\t|\tgyqazun\t|\tChristiano Ronaldo\t|\tmale\t|\tCharacters are not allowed\t\t|\t12/6/2010\t|\tBassin Road\t|\tWestside\t|\tJohannesburg\t|\tasddsa\t|\t5471582369\t|\tmjoggessur@gmail.com\t|"
    },
    {
      "line": 63,
      "value": "#\t\t\t|\tmngr330703\t|\tgyqazun\t|\tChristiano Ronaldo\t|\tmale\t|\tPIN Code must have 6 Digits\t\t|\t12/6/2010\t|\tBassin Road\t|\tWestside\t|\tJohannesburg\t|\t12345\t|\t5471582369\t|\tmjoggessur@gmail.com\t|"
    }
  ],
  "line": 64,
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
  "name": "I enter \"mngr330703\" userID and password \"gyqazun\"",
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
  "name": "I enter \"Christiano Ronaldo\" in the Customer Name field",
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
  "name": "I select \"male\" in the Radio Button field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I input \"12/6/2010\" in the Date Of Birth field",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I input \"Bassin Road\" in the Address field",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I input \"Westside\" in the City field",
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
  "name": "I input \"Johannesburg\" in the State field",
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
  "name": "I input \"789456\" in the PIN field",
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
  "name": "I input \"5471582369\" in the Telephone No field",
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
  "name": "I input \"mjoggessur@gmail.com\" in the Email field",
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
  "comments": [
    {
      "line": 43,
      "value": "#\t\tThen I click on Submit Button"
    }
  ],
  "line": 44,
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Tests_Steps.i_am_on_GTPL_Bank_website()"
});
formatter.result({
  "duration": 14241297900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mngr330703",
      "offset": 9
    },
    {
      "val": "gyqazun",
      "offset": 42
    }
  ],
  "location": "Tests_Steps.i_enter_userID_and_password(String,String)"
});
formatter.result({
  "duration": 2320066100,
  "status": "passed"
});
formatter.match({
  "location": "Tests_Steps.the_Manager_Page_is_displayed()"
});
formatter.result({
  "duration": 50423500,
  "status": "passed"
});
formatter.match({
  "location": "Tests_Steps.i_click_on_New_Customer()"
});
formatter.result({
  "duration": 859562800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Christiano Ronaldo",
      "offset": 9
    }
  ],
  "location": "Tests_Steps.i_enter_in_the_Customer_Name_field(String)"
});
formatter.result({
  "duration": 628239600,
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
  "duration": 210300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "male",
      "offset": 10
    }
  ],
  "location": "Tests_Steps.i_select_in_the_Radio_Button_field(String)"
});
formatter.result({
  "duration": 120418000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12/6/2010",
      "offset": 9
    }
  ],
  "location": "Tests_Steps.i_input_in_the_Date_Of_Birth_field(String)"
});
formatter.result({
  "duration": 143187700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bassin Road",
      "offset": 9
    }
  ],
  "location": "Tests_Steps.i_input_in_the_Address_field(String)"
});
formatter.result({
  "duration": 182203200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Westside",
      "offset": 9
    }
  ],
  "location": "Tests_Steps.i_input_in_the_City_field(String)"
});
formatter.result({
  "duration": 257075500,
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
  "duration": 192000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Johannesburg",
      "offset": 9
    }
  ],
  "location": "Tests_Steps.i_input_in_the_State_field(String)"
});
formatter.result({
  "duration": 316989800,
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
  "duration": 172900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "789456",
      "offset": 9
    }
  ],
  "location": "Tests_Steps.i_input_in_the_PIN_field(String)"
});
formatter.result({
  "duration": 307089300,
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
  "duration": 114200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5471582369",
      "offset": 9
    }
  ],
  "location": "Tests_Steps.i_input_in_the_Telephone_No_field(String)"
});
formatter.result({
  "duration": 291656800,
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
  "duration": 134200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mjoggessur@gmail.com",
      "offset": 9
    }
  ],
  "location": "Tests_Steps.i_input_in_the_Email_field(String)"
});
formatter.result({
  "duration": 325782600,
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
  "duration": 111500,
  "status": "passed"
});
formatter.match({
  "location": "Tests_Steps.i_close_the_browser()"
});
formatter.result({
  "duration": 2103572000,
  "status": "passed"
});
});