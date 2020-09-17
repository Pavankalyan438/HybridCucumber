package com.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import com.base_class.Library;

public class OrangHrmAdminPage extends Library {

	Select select;

	public OrangHrmAdminPage(WebDriver driver) {
		PageFactory.initElements(driver, this);
	}

	@FindBy(id = "menu_admin_viewAdminModule")
	WebElement menuAdmin;

	@FindBy(id = "searchSystemUser_userName")
	WebElement userName;

	@FindBy(id = "searchSystemUser_userType")
	WebElement userType;

	@FindBy(id = "searchSystemUser_employeeName_empName")
	WebElement ename;

	@FindBy(id = "searchSystemUser_status")
	WebElement userStatus;

	@FindBy(id = "searchBtn")
	WebElement search;

	public void clickAdmin() {
		menuAdmin.click();
	}

	public void insertuserName(String username) {
		userName.sendKeys(username);
	}

	public void insertuserType(String urole) {

		userType.sendKeys(urole);
	}

	public void insertempName(String eename) {
		ename.sendKeys(eename);
	}

	public void insertuserStatus(String status) {
		userStatus.sendKeys(status);
	}

	public void search() {
		search.click();
	}

}
