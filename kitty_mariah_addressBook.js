var sget = require("sget");

function getUserInput(message) {
	return sget(message).trim();
}

//Object constructors

function AddressBook (entries){

	this.entries = entries;


	this.addEntry = function(){
	//push to addyBook
	};


	this.deleteEntry = function(){
	//using the searchEntries function get index and use this.entries.splice([index],1) to remove entry.
		var entryQuery = getUserInput("Who would you like to delete?");
		var queryIndex = this.searchThroughEntries(this.entries, entryQuery, "name")

		if (queryIndex !== -1) {
			console.log("Deleting\n" + entryQuery);
			this.entries.splice(queryIndex,1);
		} else{
		//nest if/else this is not in here want to add? then call the addEntry function.
			console.log("I'm sorry %s is not found in your address book. Please enter another name.\n",entryQuery);
			return this.deleteEntry();
		};
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

	this.searchThroughEntries = function(myArray, searchTerm, property) {
	   for(var i = 0, len = myArray.length; i < len; i++) {
	       if (myArray[i][property].toLowerCase() === searchTerm.toLowerCase()) return i;
	   }
	   return -1;
	}
	
	this.searchEntries = function(){
		var entryQuery = getUserInput("Who are you looking for?");
		var queryIndex = this.searchThroughEntries(this.entries, entryQuery, "name")

		if (queryIndex !== -1) {
			this.displayEntry(this.entries[queryIndex]);
		} else{
		//nest if/else this is not in here want to add? then call the addEntry function.
			console.log("I'm sorry %s is not found in your address book. Please enter another name.\n",entryQuery);
			return this.searchEntries();
		};
		
	//use findIndex() to return index of entry, plug into display function ie. this.displayentry(this.entries[index])
	};

	this.displayEntry = function(entry){
		console.log(entry.name);
		console.log(entry.address);
		console.log(entry.phoneNumber);
	};

	this.userMenu = function(){
		var userMenuChoice = getUserInput("Welcome\n What would you like to do with your address book?\n Enter number or exit\n 1- list entries\n 2- search for entry\n 3- add entry\n 4- delete entry\n exit- to leave\n");

		switch (userMenuChoice){
			case "1":
				console.log("OK, list entries.");
				this.listEntries();
				return this.userMenu();
				break;
			case "2":
				console.log("OK, search for entry.");
				this.searchEntries(); 
				return this.userMenu();
				break;
			case "3":
				console.log("OK, add entry.");
				return this.userMenu(); 				 
				break;
			case "4":
				console.log("OK, delete entry.");
				this.deleteEntry(); 
				return this.userMenu();				 
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

var mariah = new Entry("Mariah", "France", "313-555-6666");
var kitty = new Entry("Kitty", "Jamaica", "313-555-8888");
var erika = new Entry("Erika", "Ecuador", "313-555-5555" );
var robb = new Entry ("Robb", "Antarctica", "313-555-7777");

var firstBook = new AddressBook([mariah, kitty, erika, robb]);

//Running program

console.log("\n-----------------------------------------------\n Welcome to your Address Book!\n You currently have 4 entries in your book,\n feel free to add, delete, list, or search the entries!\n-----------------------------------------------\n");

firstBook.userMenu();

