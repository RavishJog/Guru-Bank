#As a user,
#I want to be able to access the website of GTPL Bank,
#So that, I Can access the main page for transactions

@ExecutionatFeatureLevel
Feature: Validating Customer Name Field on GTPL Bank website

	#Scenario1
	@NumbersNotAllowed1
	Scenario Outline: Accessing the Registration page to create a new Customer

		Given I am on GTPL Bank website
		When I enter "mngr345576" userID and password "uharere"
		Then The Manager Page is displayed
		When I click on New Customer buton
		Then New Customer page is displayed
		And I Enter "<CustName>" in the Customer Name field
		And I verify the "<ErrorMsg>" for "<msgCndtn>"

		Examples:
			|CustName | ErrorMsg | msgCndtn|
			|Cust001  | Numbers are not allowed | Using Number for Customer Name|
#			 |        | Customer name must not be blank | leaving Customer name blank|

#Scenario2
	@BlankCustomerName
	Scenario: Leaving Customer name  Blank

		Given I am on GTPL Bank website
		When I enter "mngr345576" userID and password "uharere"
		Then The Manager Page is displayed
		When I click on New Customer buton
		Then New Customer page is displayed
		And I Enter "" in the Customer Name field
		And I verify the errormessage for customer name not blank


