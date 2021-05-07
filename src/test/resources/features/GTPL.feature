#As a user,
#I want to be able to access the website of GTPL Bank,
#So that, I Can access the main page for transactions

@ExecutionatFeatureLevel
Feature: Effect transactions on GTPL Bank website

	#Scenario1
#	@Login
#	Scenario Outline: Accessing the Registration page to create a new Customer
#
#		Given I am on GTPL Bank website
#		When I enter "<userid>" userID and password "<password>"
#		Then The Manager Page is displayed
#
#		Examples:
#			|userid			|password	| customername |
#			|mngr325061 	|EnabagE    | John Doe		|


	#Scenario2
	@Execute
	Scenario Outline: Adding a New Customer
		Given I am on GTPL Bank website
		When I enter "<userid>" userID and password "<password>"
		Then The Manager Page is displayed
		Then I click on New Customer
		When I enter "<customername>" in the Customer Name field



		Examples:
		|userid			|password	| customername |
 		|mngr325061 	|EnabagE    | John Doe		|

