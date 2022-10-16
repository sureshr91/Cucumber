package org.stepdefinition;

import org.base.Base_Class;
import org.junit.Assert;
import org.pom.AmazonLoginPojo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class AmazonStepFile extends Base_Class {
	
	AmazonLoginPojo a;
	
	@Given("To launch the chrome browser and hit amazon url")
	public void toLaunchTheChromeBrowserAndHitAmazonUrl() {
	   
		launchUrl("https://www.amazon.in/ap/signin?ie=UTF8&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2F%3F%26ext_vrnc%3Dhi%26tag%3Dgooghydrabk1-21%26ref%3Dnav_signin%26adgrpid%3D60456322738%26hvpone%3D%26hvptwo%3D%26hvadid%3D486459496700%26hvpos%3D%26hvnetw%3Dg%26hvrand%3D14397516500951374291%26hvqmt%3De%26hvdev%3Dc%26hvdvcmdl%3D%26hvlocint%3D%26hvlocphy%3D9301722%26hvtargid%3Dkwd-295905178780%26hydadcr%3D14451_2154369%26gclid%3DCj0KCQjwhqaVBhCxARIsAHK1tiO-yIfBUisHCTKEPdXH15U0BT9dYrL0fGLpwe1MLGMGjCDzqj4eNIMaAjjnEALw_wcB&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&switch_account=signin&ignoreAuthState=1&disableLoginPrepopulate=1&ref_=ap_sw_aa");
	}
    @When("To pass the valid email id to username field")
	public void toPassTheValidEmailIdToUsernameField() {
	    a=new AmazonLoginPojo();
	    sendValue(a.getUserName(), "suresh123@gmail.com");
	}
    @When("To click the continue button")
	public void toClickTheContinueButton() {
	    a=new AmazonLoginPojo();
	    Assert.assertTrue(false);
	    buttonclk(a.getClkContinue());
	}
    @When("To pass the invalid password to password field")
	public void toPassTheInvalidPasswordToPasswordField() {
		a=new AmazonLoginPojo();
		password(a.getPassword(), "6756347537");
	}
    @When("To click the sign-in button")
	public void toClickTheSignInButton() throws InterruptedException {
		a=new AmazonLoginPojo();
		buttonclk(a.getClkSignIn());
		Thread.sleep(3000);
	}
    
	

}