package org.pom;

import org.base.Base_Class;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AmazonLoginPojo extends Base_Class {
	
	public AmazonLoginPojo() {
		PageFactory.initElements(driver, this);

	}
	
	@FindBy(name="email")
	private WebElement userName;
	
	@FindBy(id="continue")
	private WebElement clkContinue;
	
	@FindBy(xpath="//input[@type='password']")
	private WebElement password;
	
	@FindBy(id="signInSubmit")
	private WebElement clkSignIn;

	public WebElement getUserName() {
		return userName;
	}

	public WebElement getClkContinue() {
		return clkContinue;
	}

	public WebElement getPassword() {
		return password;
	}

	public WebElement getClkSignIn() {
		return clkSignIn;
	}
	

}
