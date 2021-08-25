$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/AddNewCustomer.feature");
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
  "name": "Validating Customer Name Field on GTPL Bank website",
  "description": "",
  "id": "validating-customer-name-field-on-gtpl-bank-website",
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
  "name": "Accessing the Registration page to create a new Customer",
  "description": "",
  "id": "validating-customer-name-field-on-gtpl-bank-website;accessing-the-registration-page-to-create-a-new-customer",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@NumbersNotAllowed1"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on GTPL Bank website",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I enter \"mngr345576\" userID and password \"uharere\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "The Manager Page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I click on New Customer buton",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "New Customer page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I Enter \"\u003cCustName\u003e\" in the Customer Name field",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify the \"\u003cErrorMsg\u003e\" for \"\u003cmsgCndtn\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "validating-customer-name-field-on-gtpl-bank-website;accessing-the-registration-page-to-create-a-new-customer;",
  "rows": [
    {
      "cells": [
        "CustName",
        "ErrorMsg",
        "msgCndtn"
      ],
      "line": 21,
      "id": "validating-customer-name-field-on-gtpl-bank-website;accessing-the-registration-page-to-create-a-new-customer;;1"
    },
    {
      "cells": [
        "Cust001",
        "Numbers are not allowed",
        "Using Number for Customer Name"
      ],
      "line": 22,
      "id": "validating-customer-name-field-on-gtpl-bank-website;accessing-the-registration-page-to-create-a-new-customer;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 204800,
  "status": "passed"
});
formatter.before({
  "duration": 80100,
  "status": "passed"
});
formatter.before({
  "duration": 95300,
  "status": "passed"
});
formatter.before({
  "duration": 46900,
  "status": "passed"
});
formatter.before({
  "duration": 115200,
  "status": "passed"
});
formatter.before({
  "duration": 48500,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Accessing the Registration page to create a new Customer",
  "description": "",
  "id": "validating-customer-name-field-on-gtpl-bank-website;accessing-the-registration-page-to-create-a-new-customer;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@NumbersNotAllowed1"
    },
    {
      "line": 5,
      "name": "@ExecutionatFeatureLevel"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on GTPL Bank website",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I enter \"mngr345576\" userID and password \"uharere\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "The Manager Page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I click on New Customer buton",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "New Customer page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I Enter \"Cust001\" in the Customer Name field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify the \"Numbers are not allowed\" for \"Using Number for Customer Name\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Tests_Steps.i_am_on_GTPL_Bank_website()"
});
formatter.result({
  "duration": 11343259600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mngr345576",
      "offset": 9
    },
    {
      "val": "uharere",
      "offset": 42
    }
  ],
  "location": "Tests_Steps.i_enter_userID_and_password(String,String)"
});
formatter.result({
  "duration": 2401021100,
  "status": "passed"
});
formatter.match({
  "location": "Tests_Steps.the_Manager_Page_is_displayed()"
});
formatter.result({
  "duration": 54753900,
  "status": "passed"
});
formatter.match({
  "location": "Tests_Steps_NewCust.iClickOnNewCustomerButon()"
});
formatter.result({
  "duration": 4806095100,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d92.0.4515.131)\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027DESKTOP-7JFCFTT\u0027, ip: \u002710.0.0.105\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d91.0.4472.101 (af52a90bf87030dd1523486a1cd3ae25c5d76c9b-refs/branch-heads/4472@{#1462}), userDataDir\u003dC:\\Users\\Arvind\\AppData\\Local\\Temp\\scoped_dir15540_1188110749}, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dANY, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:49435}, acceptInsecureCerts\u003dfalse, browserVersion\u003d92.0.4515.131, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: a510f2fe3ffab0d4b4fd3cb5896b17f0\n*** Element info: {Using\u003dxpath, value\u003d//a[contains(text(),\u0027New Customer\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat stepDefinition.Tests_Steps_NewCust.iClickOnNewCustomerButon(Tests_Steps_NewCust.java:64)\r\n\tat ✽.When I click on New Customer buton(features/AddNewCustomer.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Tests_Steps_NewCust.newCustomerPageIsDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Cust001",
      "offset": 9
    }
  ],
  "location": "Tests_Steps_NewCust.iEnterInTheCustomerNameField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Numbers are not allowed",
      "offset": 14
    },
    {
      "val": "Using Number for Customer Name",
      "offset": 44
    }
  ],
  "location": "Tests_Steps_NewCust.iVerifyTheFor(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 414639300,
  "status": "passed"
});
formatter.after({
  "duration": 12247190900,
  "status": "passed"
});
formatter.after({
  "duration": 17593300,
  "status": "passed"
});
formatter.after({
  "duration": 12183906700,
  "status": "passed"
});
formatter.after({
  "duration": 8113700,
  "status": "passed"
});
formatter.after({
  "duration": 12181018800,
  "status": "passed"
});
});