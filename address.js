var sget = require('sget');

function AddressBook() {
	this.addresses = [];
	
	this.add = function (name, phone, address) {
		console.log("Adding contact...");
		this.addresses.push(new Contact(name, phone, address));
	};

	this.delete = function(contactName) {
		for(var index = 0, len = this.addresses.length; index < len; index++) {
			if(this.addresses[index].name === contactName) {
				this.addresses.splice(index, 1);
				console.log("Deleting " + contactName + " ...");
				return;
			}
		}
		console.log("Error, no match found. Please try again");
	};

	this.listAll = function() {
		for(var index = 0, len = this.addresses.length; index < len; index++){

			console.log("Contact " + (index + 1));
			this.addresses[index].view();
			console.log("---------------------------------------");

		}
	};

	this.search = function(contactName) {
		for(var index = 0, len = this.addresses.length; index < len; index++) {
			if(this.addresses[index].name === contactName) {
				this.addresses[index].view();
				return;
			}
		}
		console.log("Error, no contact found. Check your name and try again.");
	};
}

function Contact(name, phone, address) {
	this.name = name;
	this.phone = phone;
	this.address = address;

	this.view = function() {
		for (var property in this) {
			if (typeof this[property] !== 'function') {
				console.log(property + ": " + this[property]);
			}
		}
	};
}

function interface() {
	var quit = false;
	var selection;
	var menuOptions = ["Display Contacts", "Add Contact", "Delete Contact", "Search for Contact", "Quit"]
	var addressBook = new AddressBook();
	console.log("Welcome! Populating address book...");
	addressBook.add("Tom", "555-1212", "1234 Othertown");
	addressBook.add("Greg", "555-5555", "1234 Anytown");
	addressBook.add("Ghengis Kahn", "eagle-call", "Outer Mongolia" );

	while (!quit) {
		displayMenu(menuOptions);
		selection = sget("Please enter a number: ").trim();
		switch(selection){
			case '1': clearScreen();
					  addressBook.listAll();
					  break;
			case '2': clearScreen();
					  addressBook.add(getContactInput("Please enter a Name "), getContactInput("Phone Number "), getContactInput("Address"));
					  break;
			case '3': clearScreen();
					  addressBook.delete(getContactInput("Please enter the name of a contact to delete"));
					  break;
			case '4': clearScreen();
					  addressBook.search(getContactInput("Please enter the name to search for"));
					  break;
			case '5': quit = true;
					  break;
			default: console.log("Invalid input!"); continue;
		}
	}
}

function getContactInput(message) {
	return sget(message).trim();
}

function displayMenu(menu) {
		console.log("---------------------------------------");
		for (var index = 0; index < menu.length; index++) {
			console.log((index+1) + ") " + menu[index]);
		}
}
function clearScreen() { process.stdout.write('\033c'); }
clearScreen();
interface();