#As a user,
#I want to be able to access the website of GTPL Bank,
#So that, I Can access the main page for transactions

@ExecutionatFeatureLevel
Feature: Telecom Project

	#Scenario1
	@AddCustomer
	Scenario Outline: Accessing the Telecom page to create a new Customer

		Given I am on Guru99 telecom
		When I click on Add Customer
		Then The Add Customer Page is display
		Then I select "<status>" status
		Then I enter "<FirstName>" in FName field and I enter "<LastName>" in LName field
		Then I enter "<EmailAddress>" for email address
		And I enter "<address>" in the address box
		And I enter "<MobileNumber>" in the Mobile number box
		Then I click on Submit Button

		Examples:
			|status		| FirstName | LastName| EmailAddress |
			|Pending 	| Robert    | Pattison| RobP@gmail.com |


