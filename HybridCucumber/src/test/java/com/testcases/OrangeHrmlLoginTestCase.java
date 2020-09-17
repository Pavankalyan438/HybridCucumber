package com.testcases;


import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import com.base_class.Library;
import com.pages.OrangeHrmlLoginPage;
import com.seleniumutilities_reusablefuntions.SelenniumUtility;

public class OrangeHrmlLoginTestCase extends Library {
	OrangeHrmlLoginPage lpage;
	SelenniumUtility sutil;

	@BeforeTest
	public void launchApp()
	{
		browserSetUp();
		logger.info("Browser Launched");
	}
	
	@Test
	public void login() {
		lpage=new OrangeHrmlLoginPage(driver);
		lpage.LoginUser(properties.getProperty("username"),properties.getProperty("password"));
		logger.info("Browser Login Successful");
	}
	
	
	@AfterTest
	public void close() {	
		sutil = new SelenniumUtility(driver);   
		sutil.getTitle();
		sutil.to_take_screenshot("loginPage");
		tearDown();
		logger.info("Browser is closing");
	}
	
	
}
