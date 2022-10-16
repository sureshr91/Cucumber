package org.stepdefinition;

import java.util.List;
import java.util.Map;

import org.base.Base_Class;
import org.junit.Assert;
import org.pom.FaceBookLoginPojo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;


public class FacebookStepFile extends Base_Class {
	
	FaceBookLoginPojo f;
	
	
	@Given("To launch the browser and hit facebook url")
	public void to_launch_the_browser_and_hit_facebook_url() {
	    
	    launchUrl("https://www.facebook.com/login/");
	}
    @When("To pass the invalid value to username field")
	public void to_pass_the_invalid_value_to_username_field(DataTable d ) {
	   f=new FaceBookLoginPojo();
	   Map<String, String> map = d.asMap(String.class, String.class);
	   String value = map.get("email1");
	   sendValue(f.getUserName(), value);
	}
    @When("To pass the invalid value to password field")
	public void to_pass_the_invalid_value_to_password_field(DataTable d) {
	    f=new FaceBookLoginPojo();
	    List<Map<String, String>> map = d.asMaps();
	    String value = map.get(3).get("pass1");
	    Assert.assertTrue(false);
	    password(f.getPassword(), value);
	}
    @When("To click the login button")
	public void to_click_the_login_button() throws InterruptedException {
		f=new FaceBookLoginPojo();
		buttonclk(f.getAllBtn());
	    Thread.sleep(3000);
	}
   
 }
