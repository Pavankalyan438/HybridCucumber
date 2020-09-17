package com.step_definition;

import com.base_class.Library;
import com.pages.OrangHrmAdminPage;
import com.seleniumutilities_reusablefuntions.SelenniumUtility;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class OrangeHrmAdminSteps extends Library{
	OrangHrmAdminPage orangHrmAdminPage;
	SelenniumUtility selenniumUtility;
	

	@Given("To open admin functionality of OrangeHrm")
	public void to_open_admin_functionality_of_OrangeHrm() {
		orangHrmAdminPage=new OrangHrmAdminPage(driver);
		orangHrmAdminPage.clickAdmin();
		logger.info("admin page is opened");
		
	   }

	@When("to enter {string}")
	public void to_enter(String uname) {
	 	orangHrmAdminPage.insertuserName(uname);
	 	logger.info("user name is enterd");   
	 }

	@Then("To enter UserRole")
	public void to_enter_UserRole() {
	orangHrmAdminPage.insertuserType(properties.getProperty("urole"));
		logger.info("user role is enterd");
	   }

	@Then("To Enter EmployeeName")
	public void to_Enter_EmployeeName() {
		orangHrmAdminPage.insertempName(properties.getProperty("ename"));
		logger.info("employee name is enterd");	   
	  }

	@Then("Select Status")
	public void select_Status() {
		orangHrmAdminPage.insertuserStatus(properties.getProperty("ustatus"));
		logger.info("user status is enterd");
	   	}

	@Then("click the search button")
	public void click_the_search_button() {
		orangHrmAdminPage.search();
	  }

	@Then("take the screenshot and the title")
	public void take_the_screenshot_and_the_title() {
		selenniumUtility=new SelenniumUtility(driver);
		selenniumUtility.to_take_screenshot("admin");
		selenniumUtility.getTitle();
	 }

	@Then("close the browser")
	public void close_the_browser() {
		//driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		selenniumUtility.tearDown();
	   }
	
}
