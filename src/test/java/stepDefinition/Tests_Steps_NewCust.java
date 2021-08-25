package stepDefinition;

//import com.vimalselvam.cucumber.listener.Reporter;

import CommonMethods.Utility;
import ObjectRepository.CustomerPage;
import com.cucumber.listener.Reporter;
import cucumber.api.PendingException;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import java.io.File;
import java.io.IOException;

public class Tests_Steps_NewCust extends Utility{
    private Scenario scenario;

    @Before
    public void setUpDriver() {
        System.setProperty("webdriver.chrome.driver", "C:\\chromedriver.exe");
    }
    @Before
    public void before(Scenario scenario) {
        this.scenario = scenario;
    }
    //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    //ScreenShot Function for AFTER (Only When Failed)
    @After
    public void tearDown(Scenario scenario) throws IOException {
        if (scenario.isFailed()) {
            // calling Sceenshot function
            takeScreenShot(scenario);
        }
//        try { driver.quit(); }
        try {
            System.out.println("No Quit");; }
        catch (Exception e) {
//            tLog.logError(String.valueOf(e));
            System.out.println(String.valueOf(e));}
    }
    //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

    @After
    public static void setup() {
        Reporter.loadXMLConfig(new File("src/test/resources/configs/extent-config.xml"));
        Reporter.setSystemInfo("user", System.getProperty("user.name"));
        Reporter.setSystemInfo("os", System.getProperty("user.os"));
        Reporter.setTestRunnerOutput("Sample test runner output message");
    }


    @When("^I click on New Customer buton$")
    public void iClickOnNewCustomerButon() {
    takeScreenShot(this.scenario);
    driver.findElement(By.xpath("//a[contains(text(),'New Customer')]")).click();
    }
    @Then("^New Customer page is displayed$")
    public void newCustomerPageIsDisplayed() {
        try {
            driver.findElement(By.xpath("//p[contains(text(),'Add New Customer')]"));
        } catch (Exception e) {
            System.out.println(" Add New Customer Page is Open");
            Assert.fail("Add New Customer Page is Open");
        }

    }

    @And("^I Enter \"([^\"]*)\" in the Customer Name field$")
    public void iEnterInTheCustomerNameField(String strcutomername) throws Throwable {
        if (strcutomername.equals("")) {
            CustomerPage.txtCustName(driver).sendKeys("");
            CustomerPage.SelectGender("male", driver);
            System.out.println("Empty String Set focustomer");
        }
        else {
            CustomerPage.txtCustName(driver).sendKeys(strcutomername);
            System.out.println("Customer Number Entered");
        }
    }

    @Then("^I select \"([^\"]*)\" radButtn$")
    public void iSelectRadButtn(String arg0) throws Throwable {
        CustomerPage.SelectGender("female", driver);
        System.out.println("Gender selection completed");
    }

    @And("^I verify the errormessage for Number not allowed$")
    public void iVerifyTheErrormessageForNumberNotAllowed() {
        String strErrorMessage;
        strErrorMessage=CustomerPage.lblErrorMsg(driver).getText();
        System.out.println("Error Message displayed is: "+strErrorMessage);
        org.junit.Assert.assertEquals( "Numbers are not allowed",strErrorMessage);
        System.out.println("Error Messages is Proper");

    }

    @And("^I verify the errormessage for customer name not blank$")
    public void iVerifyTheErrormessageForCustomerNameNotBlank() {
        String strErrorMessage;
        strErrorMessage=CustomerPage.lblErrorMsg_blank(driver).getText();
        System.out.println("Error Message displayed is: "+strErrorMessage);
        org.junit.Assert.assertEquals( "Customer name must not be blank",strErrorMessage);
        System.out.println("Error Messages is Proper");
    }

   /* @And("^I enter \"([^\"]*)\" in the Customer name field$")
    public void iEnterInTheCustomerNameField(String CustName) throws Throwable {
        CustomerPage.txtCustName(driver).sendKeys(CustName);
    }
*/

    @And("^I verify the \"([^\"]*)\" for \"([^\"]*)\"$")
    public void iVerifyTheFor(String ErrorMsg, String msgCndtn) throws Throwable {
        String strErrorMessage;
        strErrorMessage=CustomerPage.lblErrorMsg(driver).getText();
        System.out.println("Error Message displayed is: "+strErrorMessage +"If" +msgCndtn);
        org.junit.Assert.assertEquals( ErrorMsg,strErrorMessage);
        System.out.println("Error Messages is Proper");

    }
}
