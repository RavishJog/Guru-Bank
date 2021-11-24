#As a user,
#I want to be able to access the website of GTPL Bank,
#So that, I Can access the main page for transactions

@ExecutionatFeatureLevel
Feature: Effect transactions on GTPL Bank website

	#Scenario1
	@LoginGTPL
	Scenario Outline: Accessing the Registration page to create a new Customer

		Given I am on GTPL Bank website
		When I enter "<userid>" userID and password "<password>"
		Then The Manager Page is displayed

		Examples:
			|userid			|password	| customername |
			|mngr359969 	|Ujyvada    | John Doe		|


	#Scenario2
	@Execute
	Scenario Outline: Adding a New Customer
		Given I am on GTPL Bank website
		When I enter "<userid>" userID and password "<password>"
		Then The Manager Page is displayed
		Then I click on New Customer
		When I enter "<customername>" in the Customer Name field
			And I verify "<Error>" for customername error message
		And I select "<Gender>" in the Radio Button field
		And I input "<birthdate>" in the Date Of Birth field
		And I input "<address>" in the Address field
		When I input "<city>" in the City field
			And I verify "<Error>" for city error message
		When I input "<state>" in the State field
			And I verify "<Error>" for state error message
		When I input "<pin>" in the PIN field
			And I verify"<Error>" for PIN error message
		When I input "<phone>" in the Telephone No field
			And I verify "<Error>" for Telephone No message
		When I input "<email>" in the Email field
		And I verify "<Error>" for Email error message
		Then I click on Submit Button
		Then I close the browser



		Examples:
			|	userid		|	password|	customername		|	Gender	|	Error							|	birthdate	|	address		|	city		|	state			|	pin		|	phone		|	email					|
#			|	mngr359969	|	Ujyvada	|						|	male	|	Customer name must not be blank	|	7/12/1984	|	Royal Road	|	New York	|	Cape Town		|	147852	|	5986254785	|	rasddasd@mu.com			|
#			|	mngr359969	|	Ujyvada	|						|	male	|	Customer name must not be blank	|	7/12/1984	|	Royal Road	|	New York	|	Cape Town		|	147852	|	5986254785	|	rasddasd@mu.com			|
#			|	mngr359969	|	Ujyvada	|	145823				|	male	|	Numbers are not allowed			|	8/10/2001	|	Royal Road	|	New York	|	Cape Town		|	147852	|	5986254785	|	rasddasd@mu.com			|
#			|	mngr359969	|	Ujyvada	|	Eric Cantona		|	male	|									|	6/4/1999	|	Royal Road	|	New York	|	Cape Town		|	147852	|	5986254785	|	rasddasd@mu.com			|
#			|	mngr359969	|	Ujyvada	|	Disha Patani		|	female	|									|	7/10/1980	|	Royal Road	|	New York	|	Cape Town		|	147852	|	5986254785	|	rasddasd@mu.com			|
#			|	mngr359969	|	Ujyvada	|	Eric Cantona		|	male	|	City Field must be not blank	|	9/16/1979	|	Royal Road	|				|	Cape Town		|	147852	|	5986254785	|	rasddasd@mu.com			|
#			|	mngr359969	|	Ujyvada	|	Eric Cantona		|	male	|	Numbers are not allowed			|	7/12/1984	|	Royal Road	|	12545		|	Cape Town		|	147852	|	5986254785	|	rasddasd@mu.com			|
			|	mngr359969	|	Ujyvada	|	Sunny Leone			|	female	|									|	1984/12/07	|	Royal Road	|	New York	|	Cape Town		|	147852	|	5986254785	|	rasddasd@mu.com			|
#			|	mngr359969	|	Ujyvada	|	Eric Cantona		|	male	|	State must not be blank			|	7/12/1984	|	Royal Road	|	New York	|					|	147852	|	5986254785	|	rasddasd@mu.com			|
#			|	mngr359969	|	Ujyvada	|	Sunny Leone			|	female	|	Numbers are not allowed			|	7/12/1984	|	Royal Road	|	New York	|	458965			|	147852	|	5986254785	|	rasddasd@mu.com			|
#			|	mngr359969	|	Ujyvada	|	Maisha Joggessur	|	female	|									|	12/6/2010	|	Bassin Road	|	Westside	|	Johannesburg	|	785496	|	5471582369	|	mjoggessur@gmail.com	|
#			|	mngr359969	|	Ujyvada	|	Christiano Ronaldo	|	male	|	PIN Code must not be blank		|	12/6/2010	|	Bassin Road	|	Westside	|	Johannesburg	|			|	5471582369	|	mjoggessur@gmail.com	|
#			|	mngr359969	|	Ujyvada	|	Christiano Ronaldo	|	male	|	Characters are not allowed		|	12/6/2010	|	Bassin Road	|	Westside	|	Johannesburg	|	asddsa	|	5471582369	|	mjoggessur@gmail.com	|
#			|	mngr359969	|	Ujyvada	|	Christiano Ronaldo	|	male	|	PIN Code must have 6 Digits		|	12/6/2010	|	Bassin Road	|	Westside	|	Johannesburg	|	12345	|	5471582369	|	mjoggessur@gmail.com	|
#			|	mngr359969	|	Ujyvada	|	Christiano Ronaldo	|	male	|									|	12/6/2010	|	Bassin Road	|	Westside	|	Johannesburg	|	789456	|	5471582369	|	mjoggessur@gmail.com	|
#			|	mngr359969	|	Ujyvada	|	Ryan Giggs			|	male	|	Telephone no must not be blank	|	12/6/2010	|	Royal Road	|	Eastside	|	Wales			|	147852	|				|	rgiggs@gmail.com		|
#			|	mngr359969	|	Ujyvada	|	Ryan Giggs			|	male	|	Characters are not allowed		|	12/6/2010	|	Royal Road	|	Eastside	|	Wales			|	147852	|	asddddd		|	rgiggs@gmail.com		|
#			|	mngr359969	|	Ujyvada	|	Ryan Giggs			|	male	|									|	12/6/2010	|	Royal Road	|	Eastside	|	Wales			|	147852	|	59033782	|	rgiggs@gmail.com		|
#			|	mngr359969	|	Ujyvada	|	Bruno Fernandes		|	male	|	Email-ID must not be blank		|	22/7/1999	|	Royal Road	|	Northside	|	Portugal		|	789654	|	59033783	|							|
#			|	mngr359969	|	Ujyvada	|	Bruno Fernandes		|	male	|	Email-ID is not valid			|	22/7/1999	|	Royal Road	|	Northside	|	Portugal		|	789654	|	59033783	|	bfernandes				|
#			|	mngr359969	|	Ujyvada	|	Bruno Fernandes		|	male	|									|	12/7/1999	|	Royal Road	|	Northside	|	Portugal		|	789654	|	59033783	|	bfernandes@gmail.com	|
