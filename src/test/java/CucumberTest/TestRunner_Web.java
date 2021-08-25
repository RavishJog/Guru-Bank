package CucumberTest;


import cucumber.api.testng.TestNGCucumberRunner;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.testng.annotations.Test;


@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"src/test/resources"},
        glue={"stepDefinition"},
        plugin={
                "html:target/CucumberReportjson/html-report",
                "com.cucumber.listener.ExtentCucumberFormatter:target/ExtentReport/Report.html"

        }
        ,tags = "@NumbersNotAllowed1"
)
public class TestRunner_Web
{

        @Test(groups = "Web", description = "Example of using TestNGCucumberRunner to invoke Cucumber")
        public void runCukes() {

                new TestNGCucumberRunner(getClass()).runCukes();

        }

}

