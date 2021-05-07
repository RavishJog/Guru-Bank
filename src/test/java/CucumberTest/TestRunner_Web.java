package CucumberTest;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"src/test/resources"},
        glue={"stepDefinition"},
        plugin={
                "html:target/CucumberReportjson/html-report"
        }
        ,tags = "@Execute"
)
public class TestRunner_Web
{

}