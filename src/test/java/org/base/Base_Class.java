package org.base;

import java.io.File;
import java.io.IOException;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class Base_Class {
	
	public static WebDriver driver;
	
	public static void browserLaunch() {
		
		WebDriverManager.chromedriver().setup();
		driver=new ChromeDriver();
	}
	public static void launchUrl(String url) {
		
		driver.get(url);
		driver.manage().window().maximize();
	}
	public static String getUrl() {
		
		String currentUrl = driver.getCurrentUrl();
		System.out.println(currentUrl);
		return currentUrl;
	}
	public static void getTitle() {
		
		String title = driver.getTitle();
		System.out.println(title);
	}
    public void closeBrowser() {
		
		driver.close();
	}
	public static void sendValue(WebElement element,String value) {
		
		element.sendKeys(value);
	}

	public static void password(WebElement element,String value) {
		
		element.sendKeys(value);
		
	}
	public static void buttonclk(WebElement element) {
		
		element.click();
	}
    public static void text(WebElement element) {
		
		String text = element.getText();
		System.out.println(text);
	}
    public static String attribute(WebElement element, String name) {
		
		String attribute = element.getAttribute(name);
		System.out.println(attribute);
		return attribute;
	}
    public static void screenShot(String img) throws IOException {
    	
		TakesScreenshot ts=(TakesScreenshot)driver;
		File source = ts.getScreenshotAs(OutputType.FILE);
		File destination=new File("C:\\Users\\Rajesh c\\eclipse-workspace\\MavenBaseClass\\screenshot\\"+img+".png");
		FileUtils.copyFile(source, destination);
	}
  
	
}
