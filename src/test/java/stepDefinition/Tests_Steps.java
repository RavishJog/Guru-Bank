package stepDefinition;

//import com.vimalselvam.cucumber.listener.Reporter;
import cucumber.api.Scenario;
import com.cucumber.listener.Reporter;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.*;
import org.junit.AfterClass;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import java.io.File;
import java.io.IOException;
import java.security.SecureRandom;

import CommonMethods.Utility;

public class Tests_Steps extends Utility{
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
        try { driver.quit(); }
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


    @Given("^I am on GTPL Bank website$")
    public void i_am_on_GTPL_Bank_website() throws Throwable {

        driver = new ChromeDriver();
        driver.get("http://demo.guru99.com/V1/index.php");
        driver.manage().window().maximize();
    }

    @When("^I enter \"([^\"]*)\" userID and password \"([^\"]*)\"$")
    public void i_enter_userID_and_password(String userid, String password) throws Throwable {
        takeScreenShot(this.scenario);
        driver.findElement(By.name("uid")).sendKeys(userid);
        driver.findElement(By.name("password")).sendKeys(password);
        driver.findElement(By.name("btnLogin")).click();
    }

    @Then("^The Manager Page is displayed$")
    public void the_Manager_Page_is_displayed() throws Throwable {
        try {
            driver.findElement(By.xpath("//a[contains(text(),'Manager')]"));
        } catch (Exception e) {
            System.out.println("User Name or Password incorrect");
            Assert.fail("User Name or Password incorrect");
        }

    }

    @Then("^I click on New Customer$")
    public void i_click_on_New_Customer() throws Throwable {
        takeScreenShot(this.scenario);
        driver.findElement(By.xpath("//a[contains(text(),'New Customer')]")).click();
    }

    @When("^I enter \"([^\"]*)\" in the Customer Name field$")
    public void i_enter_in_the_Customer_Name_field(String customername) throws Throwable {
        driver.findElement(By.name("name")).click();
        driver.findElement(By.name("name")).sendKeys(customername);
        driver.findElement(By.name("name")).sendKeys(Keys.TAB);
    }

    @Given("^I verify \"([^\"]*)\" for customername error message$")
    public void i_verify_for_customername_error_message(String Error) throws Throwable {
        if (Error.equals("Customer name must not be blank")) {
            try {
                driver.findElement(By.xpath("//label[@id='messages']")).click();
            } catch (Exception e) {
                System.out.println("Customer Name must not be blank did not appear");
                Assert.fail("Customer Name must not be blank did not appear");
            }
        } else if (Error.equals("Numbers are not allowed")) {
            try {
                driver.findElement(By.xpath("//label[@id='message']")).click();
            } catch (Exception e) {
                System.out.println("Numbers are not allowed did not appear");
                Assert.fail("Numbers are not allowed did not appear");
            }
            } else {
                System.out.println("NO Error message needed as custetomername is filled in properly");
            }
        }



    @Given("^I select \"([^\"]*)\" in the Radio Button field$")
    public void i_select_in_the_Radio_Button_field(String Gender) throws Throwable {
        if (Gender.equals("male")) {
            System.out.println("Male if working");
            driver.findElement(By.xpath("//tbody/tr[5]/td[2]/input[1]")).click();

        } else if (Gender.equals("female")) {
            System.out.println("Female if working");

            driver.findElement(By.xpath("//tbody/tr[5]/td[2]/input[2]")).click();

        } else {
            System.out.println("Option is Not Valid");
        }
    }

    @Given("^I input \"([^\"]*)\" in the Date Of Birth field$")
    public void i_input_in_the_Date_Of_Birth_field(String birthdate) throws Throwable {
        driver.findElement(By.name("dob")).sendKeys(birthdate);
    }

    @Given("^I input \"([^\"]*)\" in the Address field$")
    public void i_input_in_the_Address_field(String address) throws Throwable {
        driver.findElement(By.name("addr")).sendKeys(address);
    }

    @When("^I input \"([^\"]*)\" in the City field$")
    public void i_input_in_the_City_field(String city) throws Throwable {
        driver.findElement(By.name("city")).click();
        driver.findElement(By.name("city")).sendKeys(city);
        driver.findElement(By.name("city")).sendKeys(Keys.TAB);
    }

    @Given("^I verify \"([^\"]*)\" for city error message$")
    public void i_verify_for_city_error_message(String Error) throws Throwable {
        if (Error.equals("City Field must be not blank")) {
            try {
                driver.findElement(By.xpath("//label[@id='message4']")).click();
            } catch (Exception e) {
                System.out.println("City Field must be not blank did not appear");
                Assert.fail("City Field must be not blank did not appear");
            }
        }

        else if (Error.equals("Numbers are not allowed")) {
            try {
            driver.findElement(By.xpath("//label[@id='message4']")).click();
            } catch (Exception e) {
                System.out.println("Numbers are not allowed did not appear");
                Assert.fail("Numbers are not allowed did not appear");
            }
            }
        else {
            System.out.println("NO Error message found as Name of City was entered properly");
        }
        }

    @When("^I input \"([^\"]*)\" in the State field$")
    public void i_input_in_the_State_field(String state) throws Throwable {
        driver.findElement(By.name("state")).click();
        driver.findElement(By.name("state")).sendKeys(state);
        driver.findElement(By.name("state")).sendKeys(Keys.TAB);
    }

    @When("^I verify \"([^\"]*)\" for state error message$")
    public void i_verify_for_state_error_message(String Error) throws Throwable {
        if (Error.equals("State must not be blank")) {
            try {
                driver.findElement(By.xpath("//label[@id='message5']")).click();
            } catch (Exception e) {
                System.out.println("State must not be blank did not appear");
                Assert.fail("State must not be blank did not appear");
            }

            }
        else if (Error.equals("Numbers are not allowed")) {
            try {
            driver.findElement(By.xpath("//label[@id='message5']")).click();
            } catch (Exception e) {
                System.out.println("Numbers are not allowed did not appear");
                Assert.fail("Numbers are not allowed did not appear");
            }
        } else {
            System.out.println("NO Error message found as Name of State was entered properly");
        }

        }

    @When("^I input \"([^\"]*)\" in the PIN field$")
    public void i_input_in_the_PIN_field(String pin) throws Throwable {
        driver.findElement(By.name("pinno")).click();
        driver.findElement(By.name("pinno")).sendKeys(pin);
        driver.findElement(By.name("pinno")).sendKeys(Keys.TAB);
    }

    @When("^I verify\"([^\"]*)\" for PIN error message$")
    public void i_verify_for_PIN_error_message(String Error) throws Throwable {
        if (Error.equals("PIN Code must not be blank")) {
            try {
                driver.findElement(By.xpath("//label[@id='message6']")).click();
            } catch (Exception e) {
                System.out.println("PIN Code must not be blank did not appear");
                Assert.fail("PIN Code must not be blank did not appear");
            }
        } else if (Error.equals("Characters are not allowed")) {
            try {
            driver.findElement(By.xpath("//label[@id='message6']")).click();
            } catch (Exception e) {
                System.out.println("Characters are not allowed did not appear");
                Assert.fail("Characters are not allowed did not appear");
            }
        } else if (Error.equals("PIN Code must have 6 Digits")) {
            try {
            driver.findElement(By.xpath("//label[@id='message6']")).click();
            } catch (Exception e) {
                System.out.println("PIN Code must have 6 Digits did not appear");
                Assert.fail("PIN Code must have 6 Digits did not appear");
            }
        } else {
            System.out.println("NO Error message needed as PIN NO is filled in properly");
        }
    }
    @When("^I input \"([^\"]*)\" in the Telephone No field$")
    public void i_input_in_the_Telephone_No_field(String phone) throws Throwable {
        driver.findElement(By.name("telephoneno")).click();
        driver.findElement(By.name("telephoneno")).sendKeys(phone);
        driver.findElement(By.name("telephoneno")).sendKeys(Keys.TAB);
    }

    @When("^I verify \"([^\"]*)\" for Telephone No message$")
    public void i_verify_for_Telephone_No_message(String Error) throws Throwable {
        if (Error.equals("Telephone no must not be blank")) {
            try {
                driver.findElement(By.xpath("//label[@id='message7']")).click();
            } catch (Exception e) {
                System.out.println("Telephone no must not be blank did not appear");
                Assert.fail("Telephone no must not be blank did not appear");
            }
        } else if (Error.equals("Characters are not allowed")) {
            try {
                driver.findElement(By.xpath("//label[@id='message7']")).click();
            } catch (Exception e) {
                System.out.println("Characters are not allowed did not appear");
                Assert.fail("Characters are not allowed did not appear");
            }
        }
        else {
            System.out.println("NO Error message needed as Telephone NO is filled in properly");
        }
        }
    @When("^I input \"([^\"]*)\" in the Email field$")
    public void i_input_in_the_Email_field(String email) throws Throwable {
        driver.findElement(By.name("emailid")).click();
        driver.findElement(By.name("emailid")).sendKeys(email);
        driver.findElement(By.name("emailid")).sendKeys(Keys.TAB);
    }

    @When("^I verify \"([^\"]*)\" for Email error message$")
    public void i_verify_for_Email_error_message(String Error) throws Throwable {
        if (Error.equals("Email-ID must not be blank")) {
            try {
                driver.findElement(By.xpath("//label[@id='message9']")).click();
            } catch (Exception e) {
                System.out.println("Email-ID must not be blank did not appear");
                Assert.fail("Email-ID must not be blank did not appear");
            }
        } else if (Error.equals("Email-ID is not valid")) {
            try {
                driver.findElement(By.xpath("//label[@id='message9']")).click();
            } catch (Exception e) {
                System.out.println("Email-ID is not valid did not appear");
                Assert.fail("Email-ID is not valid did not appear");
            }
        }
        else {
            System.out.println("NO Error message needed as Email is filled in properly");
        }
        takeScreenShot(scenario);
    }
    @Then("^I click on Submit Button$")
    public void i_click_on_Submit_Button() throws Throwable {
        driver.findElement(By.name("sub")).click();
    }
    @Then("^I close the browser$")
    public void i_close_the_browser () throws Throwable {
        driver.quit();
    }
}