package org.testrunner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.stepdefinition.JVM;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources", glue = "org.stepdefinition", monochrome = true, dryRun = false, snippets = SnippetType.CAMELCASE, plugin = {
		"html:target", "junit:junit\\junit.xml", "json:report\\report.json","rerun:src/test/resources\\failed.txt" },strict=true)

public class TestRunnerClass {

	@AfterClass
	public static void report() {

		JVM.reportGeneration("C:\\Users\\Rajesh c\\eclipse-workspace\\MavenCucumber\\report\\report.json");

	}

}
