package stepDefinition;

//import com.vimalselvam.cucumber.listener.Reporter;

import CommonMethods.Utility;
import ObjectRepository.LoginPage;
import com.cucumber.listener.Reporter;
import cucumber.api.PendingException;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import java.io.File;
import java.io.IOException;

public class Tests_Steps_Telecom extends Utility {
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
            System.out.println("No Quit");
            ;
        } catch (Exception e) {
//            tLog.logError(String.valueOf(e));
            System.out.println(String.valueOf(e));
        }
    }
    //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

    @After
    public static void setup() {
        Reporter.loadXMLConfig(new File("src/test/resources/configs/extent-config.xml"));
        Reporter.setSystemInfo("user", System.getProperty("user.name"));
        Reporter.setSystemInfo("os", System.getProperty("user.os"));
        Reporter.setTestRunnerOutput("Sample test runner output message");
    }

    @Given("^I am on Guru(\\d+) telecom$")
    public void i_am_on_Guru_telecom(int arg1) throws Throwable {

        driver = new ChromeDriver();
        driver.get("http://demo.guru99.com/telecom/index.html");
        driver.manage().window().maximize();
    }

    @When("^I click on Add Customer$")
    public void i_click_on_Add_Customer() throws Throwable {
        takeScreenShot(this.scenario);
        driver.findElement(By.xpath("//h3//a[contains(text(),'Add Customer')]")).click();


    }

    @Then("^The Add Customer Page is display$")
    public void the_Add_Customer_Page_is_display() throws Throwable {
        try {
            driver.findElement(By.xpath("//h1[contains(text(),'Add Customer')]"));
            takeScreenShot(this.scenario);
        } catch (Exception e) {
            System.out.println("Add Customer Page is not displayed");
            Assert.fail("Problem");
        }
    }

    @Then("^I select \"([^\"]*)\" status$")
    public void iSelectStatus(String strStatus) throws Throwable {
        if (strStatus.equals("Pending")) {
            System.out.println("Pending is working");
            driver.findElement(By.xpath("//label[contains(text(),'Done')]")).click();

        } else if (strStatus.equals("Done")) {
            System.out.println("Done is working");

            driver.findElement(By.xpath("//label[contains(text(),'Pending')]")).click();

        } else {
            System.out.println("Option is Not Valid");
        }
        takeScreenShot(this.scenario);
    }

    @Then("^I enter \"([^\"]*)\" in FName field and I enter \"([^\"]*)\" in LName field$")
    public void iEnterInFNameFieldAndIEnterInLNameField(String strFName, String strLName) throws Throwable {

        driver.findElement(By.name("fname")).sendKeys(strFName);
        driver.findElement(By.name("lname")).sendKeys(strLName);
        takeScreenShot(this.scenario);
    }

    @Then("^I enter \"([^\"]*)\" for email address$")
    public void iEnterForEmailAddress(String strEmail) throws Throwable {
        driver.findElement(By.name("addr")).sendKeys(strEmail);
        takeScreenShot(this.scenario);
    }
}
