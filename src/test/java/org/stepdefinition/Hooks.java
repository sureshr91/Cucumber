package org.stepdefinition;

import org.base.Base_Class;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends Base_Class {
	
	@Before(order=1)
	public void launchBrowser() {
		
		browserLaunch();
		System.out.println("Browser_Launch");
	}
	
	@After(order=100)
	public void browserClose() {
		
        closeBrowser();
        System.out.println("Browser_Close");
	}
	
	@Before(order=10)
	public void beforeScreenshot() {
		System.out.println("Before_Screenshot");

	}
	
	@After(order=1000)
	public void afterScreenshot(Scenario s) {
		
		if (s.isFailed()) {
			
			TakesScreenshot ts= (TakesScreenshot)driver;
			byte[] screenshotAs = ts.getScreenshotAs(OutputType.BYTES);
			s.embed(screenshotAs, "image/png");
			
		}

	}

}
