package stepDefinition;

import cucumber.api.java.Before;
import cucumber.api.java.en.*;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;


public class Tests_Steps {

    WebDriver driver;
    @Before
    public void setUpDriver(){
        System.setProperty("webdriver.chrome.driver", "C:\\chromedriver.exe");
    }

    @Given("^I am on GTPL Bank website$")
    public void i_am_on_GTPL_Bank_website() throws Throwable {
        driver = new ChromeDriver();
        driver.get("http://demo.guru99.com/V1/index.php");
        driver.manage().window().maximize();
        }
    @When("^I enter \"([^\"]*)\" userID and password \"([^\"]*)\"$")
    public void i_enter_userID_and_password(String userid, String password) throws Throwable {
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
        }
        }
    @Then("^I click on New Customer$")
    public void i_click_on_New_Customer() throws Throwable {
        driver.findElement(By.xpath("//a[contains(text(),'New Customer')]")).click();
    }
    @When("^I enter \"([^\"]*)\" in the Customer Name field$")
    public void i_enter_in_the_Customer_Name_field(String customername) throws Throwable {
        driver.findElement(By.name("name")).sendKeys(customername);
    }
}
