package ObjectRepository;

import CommonMethods.Utility;
import cucumber.api.Scenario;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class GTPL {

    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//    Return Methods for Elements
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    private static WebElement element = null;

    //Create method for Username Field
    public static WebElement txtUsername(WebDriver driver) {
        element = driver.findElement(By.name("uid"));
        return element;
    }

    //Create method for Password Field
    public static WebElement txtPassword(WebDriver driver) {
        element = driver.findElement(By.name("password"));
        return element;
    }

    //Create method for Login Button
    public static WebElement btnLogin(WebDriver driver) {
        element = driver.findElement(By.name("btnLogin"));
        return element;
    }

    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //Setting Methods Common for Login Page Class
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    public static void LoginWith(String strUserName, String strPassword, WebDriver driver) {
        txtUsername(driver).sendKeys(strUserName);
        txtPassword(driver).sendKeys(strPassword);
        btnLogin(driver).click();
    }
}
