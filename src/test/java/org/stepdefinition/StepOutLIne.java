package org.stepdefinition;

import org.base.Base_Class;
import org.pom.FaceBookLoginPojo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class StepOutLIne extends Base_Class {
	
	FaceBookLoginPojo f;
	

    @When("To pass{string} the bulk data to username field")
	public void to_pass_the_bulk_data_to_username_field(String value) {
    	f=new FaceBookLoginPojo();
 	    sendValue(f.getUserName(), value);
	}
    @When("To pass the bulk data to{string} password field")
	public void to_pass_the_bulk_data_to_password_field(String value) {
    	f=new FaceBookLoginPojo();
	    password(f.getPassword(), value);
	}

	
	

}
