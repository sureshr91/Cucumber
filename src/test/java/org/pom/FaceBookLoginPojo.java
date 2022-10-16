package org.pom;

import org.base.Base_Class;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;
import org.openqa.selenium.support.PageFactory;

public class FaceBookLoginPojo extends Base_Class {
	
	public FaceBookLoginPojo() {
       
		PageFactory.initElements(driver, this);
	}
	
	@CacheLookup// It is used to increase the performance
	@FindBy(name="email")
	private WebElement userName;
	
	@FindBy(id="pass")
	private WebElement password;
	
	@FindBy(xpath="//button[text()='Log In']")
	private WebElement loginBtn;
	
	public WebElement getLoginBtn() {
		return loginBtn;
	}

	@FindBys({
	
		@FindBy(name="login"),
		@FindBy(xpath="//button[text()='Log In']"),
		@FindBy(id="u_0_d_BM")
	})
	private WebElement btn;
	
	@FindAll({
		
		@FindBy(name="login"),
		@FindBy(xpath="//button[text()='Log In']")
	})
	private WebElement allBtn;
	
    public WebElement getAllBtn() {
		return allBtn;
	}

	public WebElement getUserName() {
		return userName;
	}

	public WebElement getBtn() {
		return btn;
	}

	public WebElement getPassword() {
		return password;
	}

	

	

}
