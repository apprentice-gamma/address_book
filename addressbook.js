var sget = require('sget');

var robb = new Person("Robb", "Tvorik", "1520 Woodward Ave", "800-ROB-TACO");
var erika = new Person("Erika", "Carlson", "1520 Woodward Ave", "800-TEACHER");

var addressBook = {
	entries: [robb, erika],
	getInput: function(){
		var input = sget("\nWelcome to the Address Book 9000! What would you like to do?\ntype 'add' to add an entry\ntype 'delete' to delete an entry\ntype 'list' to list all entries\ntype search to 'search' for entry by first name\ntype 'exit to exit").trim().toLowerCase();
		this.handleUserInput(input);
	},
	handleUserInput: function(input){
		switch(input){
			case "add":
				this.addEntry();
				break;

			case "delete":
				this.deleteEntry();
				break;

			case "list":
				this.listEntries();
				break;

			case "search":
				this.searchEntries();
				break;

			case "exit":
				console.log("\nYou are leaving the Address Book 9000.")
				break;

			default:
				console.log("\nThe Address Book 9000 doesn't understand your input");
				this.getInput();

		}
	},
	addEntry: function(){
		var argumentArray = [];
		var typeArray = ["first name", "last name", "address", "phone number"];
		for(var i = 0; i < typeArray.length; i++){
			console.log("\nplease enter the", typeArray[i])
			var input = sget().trim();
			argumentArray.push(input);
		}
		var temp = new Person(argumentArray[0], argumentArray[1], argumentArray[2], argumentArray[3]);
		this.entries.push(temp);
		this.getInput();
	},
	deleteEntry: function(){
		var input = sget("What is the first name of the contact you would like to delete").trim();
		for (var i = 0; i < this.entries.length; i++){
			var name = this.entries[i].firstName;
			if (input === name){
			inputIndex = this.entries.indexOf(this.entries[i]);
			this.entries.splice(inputIndex, 1);
			}
		}
		this.getInput();
	},
	printEntries: function(input){
		console.log("\n"+input.firstName, input.lastName + ',', input.address + ',', input.phoneNumber);
	},
	listEntries: function(){
		this.entries.forEach(function(entry){
			addressBook.printEntries(entry);
		});
		this.getInput();
	},
	searchEntries: function(){
		var input = sget("What is the first name of the person for which you would like to search?").trim();
		for (var i = 0; i < this.entries.length; i++){
			var name = this.entries[i].firstName;
			if (input === name){
				this.printEntries(this.entries[i]);
				break;
			} else if (input !== name && i === this.entries.length - 1){
				console.log("\nEntry doesn't exist!");
			}
		}
		this.getInput();
	},
}

function Person(firstName, lastName, address, phoneNumber){
	this.firstName = firstName;
	this.lastName = lastName;
	this.address = address;
	this.phoneNumber = phoneNumber;

}



addressBook.getInput();



