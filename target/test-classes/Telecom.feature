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
		#Then I click on  the Submit Button
		Then I click on "<EButton>"

		Examples:
			|status		| FirstName | LastName| EmailAddress | address | MobileNumber | EButton |
			|Pending 	| Robert    | Pattison| RobP@gmail.com | WeltevredenPark | 0778234416| Submit |
			|Done 	| Alison    | Umbrella| Academy@gmail.com | Movie | 0778234416| Reset |

#Scenario2
	@AddTariffPlan
	Scenario Outline: Adding Tariff Plan
		Given I am on Guru99 telecom
		When I click on Add Tariff Plan
		Then the Add Tariff Plan form is displayed
		Then I enter "<MonthlyRental>" in the Monthly rental field
		Then I enter "<FLocalMin>" in the Free Local Minutes field
		Then I enter "<FInternationalMin>" in the Free International Minutes field
		Then I enter "<FSmsPck>" in the Free SMS Pack field
		Then I enter "<LpmCharges>" in the Local Per Minutes Charges field
		Then I enter "<IpmCharges>" in the International Per Minutes Charges field
		Then I enter "<SMSpCharge>" in the SMS per charge field
		And I click on "<EndBttn>" to select Submit or reset.
		Examples:
			| MonthlyRental | FLocalMin | FInternationalMin | FSmsPck | LpmCharges| IpmCharges | SMSpCharge | EndBttn |
			| 7500   | 10               | 20                | 2       | 35        | 60         | 23         | Submit  |

