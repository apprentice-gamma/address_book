var sget = require('sget');

function AddressBook(entry1, entry2, entry3, entry4){
	this.entries = [entry1, entry2, entry3, entry4];

	this.showBook = function(){
		for(var i=0;i<this.entries.length;i++){
			this.entries[i].showEntry();
		}
	}
	
	this.addAddress = function() {
		var firstName = sget("Enter the first name: ").trim();
		var lastName = sget("Enter the last name: ").trim();
		var phone = sget("Enter the phone number: ").trim();
		var address = sget("Enter the address: ").trim();

		var newEntry = new AddressEntry(firstName, lastName, phone, address);
		this.entries.push(newEntry);


	}

	this.deleteEntry = function(){
		console.log("DELETE ENTRIES\n===================================\n");
		
		for(var i=0;i<this.entries.length;i++){
			console.log((i+1)+") "+this.entries[i].firstName+" "+this.entries[i].lastName+"\n");
		}

		var input = parseInt(sget("Enter a number to delete the contact.").trim());
		if (this.entries[input-1] === undefined){
			this.deleteEntry();
			console.log("That is not a valid contact!");
		}
		else {
			this.entries.splice(input-1);
			console.log("BALEETED!");
		}

	}



}


function AddressEntry(firstName, lastName, phone, address){
	this.firstName = firstName;
	this.lastName = lastName;
	this.phone = phone;
	this.address = address;

	this.showEntry = function(){
	
		console.log("===================================\nName: "+this.firstName+" "+this.lastName+"\nPhone: "+this.phone+"\nAddress: "+this.address+"\n===================================\n")
	}
}

var drZoidberg = new AddressEntry("Dr.", "Zoidberg", "313-555-7294", "Space");
var peeWee = new AddressEntry("Pee-wee", "Herman", "313-555-4242", "1569 Hollywood St Detroit MI 48216");
var jenny = new AddressEntry("Jenny","Smith", "313-867-5309", "1444 Someplace Pl Detroit MI 48212");
var missCleo = new AddressEntry("Call me now!", "Cleo","1-800-MIS-CLEO", "Jamaica or something");

var myBook = new AddressBook(drZoidberg, peeWee, jenny, missCleo);
console.log(myBook);

function displayMainMenu(){
	
	console.log("WELCOME TO THE ADDRESS-O-MATIC 9000\n===================================\n1) Add a new entry.\n2) Display contacts \n3) Delete contact \n5) Quit.\n===================================");
	
	var input=handleInput();

	switch(input){
		case 1:
			myBook.addAddress();
			displayMainMenu();
			break;
		case 2:
			myBook.showBook();
			displayMainMenu();
			break;
		case 3:
			myBook.deleteEntry();
			displayMainMenu();
			break;
		case 4:
			break;
		case 5:
			console.log("Goodbye!");
			process.exit(0);
			break;
		default:


	}
}

function handleInput(){
	
	var userInput = parseInt(sget("Enter your choice... ").trim());
	
	if (isNaN(userInput) || userInput>5 || userInput<1){
		console.log("Please enter a number!");
		handleInput();
	}
	else {return userInput;}

}



displayMainMenu();
