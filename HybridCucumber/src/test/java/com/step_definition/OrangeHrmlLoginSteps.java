package com.step_definition;

import com.base_class.Library;
import com.pages.OrangeHrmlLoginPage;
import com.seleniumutilities_reusablefuntions.SelenniumUtility;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class OrangeHrmlLoginSteps extends Library{
	OrangeHrmlLoginPage orangeHrmlLoginPage;
	SelenniumUtility selenniumUtility;
	

	@Given("To launch the browser and Navigate to the Url")
	public void to_launch_the_browser_and_Navigate_to_the_Url() {
		browserSetUp();
		logger.info("Browser Launched");
		
		
	   }

	@When("To Enter Username and Password")
	public void to_Enter_Username_and_Password() {
		orangeHrmlLoginPage=new OrangeHrmlLoginPage(driver);
		
		orangeHrmlLoginPage.LoginUser(properties.getProperty("username"), properties.getProperty("password"));
		logger.info("Enter username and password");
	    }

	@Then("To Click the Submit button")
	public void to_Click_the_Submit_button() {
		orangeHrmlLoginPage.submit();
		logger.info("submitted");
	  	}

	@Then("To Take the Screenshot and the Title")
	public void to_Take_the_Screenshot_and_the_Title() {
		selenniumUtility=new SelenniumUtility(driver);
		selenniumUtility.to_take_screenshot("loginpage1");
		selenniumUtility.getTitle();
		logger.info("took snapshot");
	    }

	/*@Then("To Close the browser")
	public void to_Close_the_browser() {
		tearDown();
	   }*/

}
