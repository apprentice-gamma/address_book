var sget = require("sget");


//Object constructors

function AddressBook (entries){

	this.entries = entries;


	this.addEntry = function(){
	//push to addyBook
	};


	this.deleteEntry = function(){
	//using the searchEntries function get index and use addyBook.splice([index],1) to remove entry.
	};

	//be able to print an entry's name by passing in entries[index]
 	this.displayName = function(entry){
    	console.log(entry.name);
	}


	this.listEntries = function(){
		for (var i = 0; i < this.entries.length; i++) {
			this.displayName(this.entries[i]);
		};
	};


	this.searchEntries = function(){
	//use findIndex() to return index of entry, plug into display function ie. this.displayentry(this.entries[index])
	};

	this.displayEntry = function(entry){
		console.log(entry.name);
		console.log(entry.address);
		console.log(entry.phoneNumber);
	};

	this.userMenu = function(){
		var userMenuChoice = sget("Welcome\n What would you like to do with your address book?\n Enter number or exit\n 1- list entries\n 2- search for entry\n 3- add entry\n 4- delete entry\n exit- to leave\n").trim();

		switch (userMenuChoice){
			case "1":
				console.log("OK, list entries.");
				this.listEntries();
				break;
			case "2":
				console.log("OK, search for entry."); 
				break;
			case "3":
				console.log("OK, add entry."); 				 
				break;
			case "4":
				console.log("OK, delete entry."); 				 
				break;	
			case "exit":
				console.log("Goodbye.");
				break;
			default:
				console.log("Invalid request. Please try again.");
				return this.userMenu();
				break;
		};
	}
}; 

function Entry (name, address, phoneNumber){
	this.name = name;
	this.address = address;
	this.phoneNumber = phoneNumber;
};


//New objects

var Mariah = new Entry("Mariah", "France", "313-555-6666");
var Kitty = new Entry("Kitty", "Jamaica", "313-555-8888");
var Erika = new Entry("Erika", "Ecuador", "313-555-5555" );
var Robb = new Entry ("Robb", "Antarctica", "313-555-7777");

var firstBook = new AddressBook([Mariah, Kitty, Erika, Robb]);

//Running program

console.log("\n-----------------------------------------------\n Welcome to your Address Book!\n You currently have 4 entries in your book,\n feel free to add, delete, list, or search the entries!\n-----------------------------------------------\n");


firstBook.userMenu();

