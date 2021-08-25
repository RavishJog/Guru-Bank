package stepDefinition;

//import com.vimalselvam.cucumber.listener.Reporter;

import CommonMethods.Utility;
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
import java.util.concurrent.TimeUnit;

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
        driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
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
        driver.findElement(By.name("emailid")).sendKeys(strEmail);
        takeScreenShot(this.scenario);
    }

    @And("^I enter \"([^\"]*)\" in the address box$")
    public void iEnterInTheAddressBox(String strAddress) throws Throwable {
        driver.findElement(By.name("addr")).sendKeys(strAddress);
        takeScreenShot(this.scenario);
       }

    @And("^I enter \"([^\"]*)\" in the Mobile number box$")
    public void iEnterInTheMobileNumberBox(String intMobile) throws Throwable {
        driver.findElement(By.name("telephoneno")).sendKeys(intMobile);
        takeScreenShot(this.scenario);
    }

//    @Then("^I click on  the Submit Button$")
//    public void iClickOnTheSubmitButton() throws InterruptedException {
//        driver.findElement(By.name("submit")).click();
//        Thread.sleep(250000);
//        takeScreenShot(this.scenario);
//    }

    @Then("^I click on \"([^\"]*)\"$")
    public void iClickOn(String ebtn) throws Throwable {
        if (ebtn.equals("Submit")) {
            //System.out.println("Customer Number is provided");
            driver.findElement(By.xpath("//input[@type='submit']")).click();
            Thread.sleep(250000);
            takeScreenShot(this.scenario);

        } else if (ebtn.equals("Reset")) {
            //System.out.println("Form is clear");
            driver.findElement(By.xpath("//input[@type='reset']")).click();
            Thread.sleep(250000);
            takeScreenShot(this.scenario);
        } else {
            System.out.println("Option is Not Valid");

        }
    }

    @Given("^I am on Guru(\\d+)telecom$")
    public void iAmOnGuruTelecom(int arg0) {
        driver = new ChromeDriver();
        driver.get("http://demo.guru99.com/telecom/index.html");
        driver.manage().window().maximize();
    }

    @When("^I click on Add Tariff Plan$")
    public void iClickOnAddTariffPlan() {
        takeScreenShot(this.scenario);
        driver.findElement(By.xpath("//div//a[@href='addtariffplans.php']")).click();
    }

    @Then("^the Add Tariff Plan form is displayed$")
    public void theAddTariffPlanFormIsDisplayed() {
        try {
            driver.findElement(By.xpath("//h1[contains(text(),'Add Tariff Plans')]"));
            takeScreenShot(this.scenario);
        } catch (Exception e) {
            System.out.println("Add Tariff Plan Page is not displayed");
            Assert.fail("Problem");
        }
    }

    @Then("^I enter \"([^\"]*)\" in the Monthly rental field$")
    public void iEnterInTheMonthlyRentalField(String intMRental) throws Throwable {
        driver.findElement(By.id("rental1")).sendKeys(intMRental);
        takeScreenShot(this.scenario);
    }

    @Then("^I enter \"([^\"]*)\" in the Free Local Minutes field$")
    public void iEnterInTheFreeLocalMinutesField(String intFLmin) throws Throwable {
        driver.findElement(By.name("local_minutes")).sendKeys(intFLmin);
        takeScreenShot(this.scenario);
    }

    @Then("^I enter \"([^\"]*)\" in the Free International Minutes field$")
    public void iEnterInTheFreeInternationalMinutesField(String intFImin) throws Throwable {
        driver.findElement(By.name("inter_minutes")).sendKeys(intFImin);
        takeScreenShot(this.scenario);
    }
    @Then("^I enter \"([^\"]*)\" in the Free SMS Pack field$")
    public void iEnterInTheFreeSMSPackField(String intfsmsp) throws Throwable {
        driver.findElement(By.name("sms_pack")).sendKeys(intfsmsp);
        takeScreenShot(this.scenario);
    }

    @Then("^I enter \"([^\"]*)\" in the Local Per Minutes Charges field$")
    public void iEnterInTheLocalPerMinutesChargesField(String intLpmin) throws Throwable {
        driver.findElement(By.name("minutes_charges")).sendKeys(intLpmin);
        takeScreenShot(this.scenario);
    }

    @Then("^I enter \"([^\"]*)\" in the International Per Minutes Charges field$")
    public void iEnterInTheInternationalPerMinutesChargesField(String intIpmin) throws Throwable {
        driver.findElement(By.name("inter_charges")).sendKeys(intIpmin);
        takeScreenShot(this.scenario);
    }

    @Then("^I enter \"([^\"]*)\" in the SMS per charge field$")
    public void iEnterInTheSMSPerChargeField(String intSMSpC) throws Throwable {
        driver.findElement(By.name("sms_charges")).sendKeys(intSMSpC);
        takeScreenShot(this.scenario);
    }

    @And("^I click on \"([^\"]*)\" to select Submit or reset\\.$")
    public void iClickOnToSelectSubmitOrReset(String Lbttn) throws Throwable {
        if (Lbttn.equals("Submit")) {
            System.out.println("Submit Button is not available");
            driver.findElement(By.xpath("//input[@type='submit']")).click();
            Thread.sleep(250000);
            takeScreenShot(this.scenario);

        } else if (Lbttn.equals("Reset")) {
            //System.out.println("Rest Button is not available");
            driver.findElement(By.xpath("//input[@type='reset']")).click();
            Thread.sleep(250000);
            takeScreenShot(this.scenario);
        } else {
            System.out.println("Option is Not Valid");

        }
    }
}

