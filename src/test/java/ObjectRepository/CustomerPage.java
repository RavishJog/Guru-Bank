package ObjectRepository;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.io.IOException;
public class CustomerPage {
    //**************************METHOD 1*******make_Use_of_Separate_Class***********************
    private static WebElement element = null;

    // Defining Object Variables
    private static final By Button_NewCustomer = By.xpath("//li//a[contains(text(),'New Customer')]");
    private static final By radio_Male = By.xpath("//tbody/tr[5]/td[2]/input[1]");




    //**************************Return Methods for each Element***********************


    public static WebElement btnNewCustomer (WebDriver driver) {
        element = driver.findElement(Button_NewCustomer);
        return element;
    }
    public static WebElement txtCustName (WebDriver driver) {
        element = driver.findElement(By.name("name"));
        return element;
    }
    //Radio Button
    private static WebElement radGenderMale (WebDriver driver) {
        element = driver.findElement(radio_Male);
        return element;
    }
    public static WebElement radGenderFemale (WebDriver driver) {
        element = driver.findElement(By.xpath("//tbody/tr[5]/td[2]/input[2]"));
        return element;
    }
    //*************GET ERROR Message for CustName***************

    public static WebElement lblErrorMsg (WebDriver driver) {
        element = driver.findElement(By.xpath("//Label[contains(text(),'Numbers a')]"));
        return element;
    }
    public static WebElement lblErrorMsg_blank (WebDriver driver) {
        element = driver.findElement(By.xpath("//Label[contains(text(),'Customer name')]"));
        return element;
    }


    //********METHOD******************
    public static void SelectGender(String strGender, WebDriver driver){
        if (strGender.equals("male")) {
            System.out.println("Male if working");
            radGenderMale(driver).click();

        } else if (strGender.equals("female")) {
            System.out.println("Female if working");
            radGenderFemale(driver).click();

        } else {
            System.out.println("Option is Not Valid");
        }
    }
}
