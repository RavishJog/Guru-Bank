package CucumberTest;

import cucumber.api.testng.TestNGCucumberRunner;
import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;
import org.apache.commons.io.FileUtils;
import org.junit.runner.RunWith;
import org.testng.annotations.Test;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import java.io.File;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;



@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"src/test/resources"},
        glue={"stepDefinition"},
        plugin={
                "html:target/CucumberReportjson/html-report",
                "com.cucumber.listener.ExtentCucumberFormatter:ExtentReport/Report.html"

        }
        ,tags = "@Execute"
)
public class TestRunner_Web
{

    @Test(groups = "Web", description = "Example of using TestNGCucumberRunner to invoke Cucumber")
    public void runCukes() {
//        ApplicationConfig applicationConfig = new ApplicationConfig();
//        System.setProperty("logFile",applicationConfig.getLog4JFile());
//        new TestNGCucumberRunner(getClass()).runCukes();
        String OutputPath = "target/CucumberReportjson";
        generateReport(OutputPath);
    }

        private static void generateReport(String OutputPath) {
                Collection<File> jsonFiles = FileUtils.listFiles(new File(OutputPath), new String[] {"json"}, true);
                List<String> jsonPaths = new ArrayList(jsonFiles.size());
                jsonFiles.forEach(file -> jsonPaths.add(file.getAbsolutePath()));
                Configuration config = new Configuration(new File("target"), "FrontEnd");
                ReportBuilder reportBuilder = new ReportBuilder(jsonPaths, config);
                reportBuilder.generateReports();
        }
}