/*
Linda and Kelsey

*/
var sget = require('sget');

function Contact(name, address, phone) {
		this.name = name;
		this.address = address;
		this.phone = phone;
}

Contact.prototype.view = function(){
	return console.log(this.name + " lives at " + this.address + " and phone number is " + this.phone + ".");
};

function AddressBook(contacts) {
	this.contacts = contacts;
	this.list = function() {
		this.contacts.forEach(function(contact) {
			contact.view();
		})
	};
}

AddressBook.prototype.add = function(contact) {
	this.contacts.push(contact);
};

AddressBook.prototype.delete = function(contact) {
	var index = this.contacts.indexOf(contact);
	this.contacts.splice(index, 1);
};

AddressBook.prototype.search = function(contactName) {
	var foundPerson;
	this.contacts.forEach(function(searchContact){
		if (searchContact.name === contactName) {
			foundPerson = searchContact;		
		}
	})
	return foundPerson;
}

function getInput(saying) {
	var input = sget(saying).trim();
	return input;
}

function callSearch(input) {
	var foundPerson = myAddressBook.search(input);
	if (foundPerson === undefined){
		return console.log("Person Not Found");
	} else {
		return foundPerson.view();
	}
}

function openAddressBook(){
	console.log("1 - add a contact\n2 - delete a contact\n3 - list the contacts\n4 - search for a contact")
	var userInput =  getInput("What would you like to do with your address book?");
	switch (userInput) {
		case "1":

			break;
		case "2":

			break;
		case "3":
			myAddressBook.list();
			break;
		case "4":
			callSearch(getInput("Who would you like to search for?"));
			break;
		default:
			arguments.callee();
			break;
	}
}

var bozo = new Contact("Bozo the Clown", "Circus", "333-543-4567");
var dog = new Contact("Spot the Dog", "The Doghouse", "123-456-7890");
var jane = new Contact("Jane Doe", "New York City", "101-555-1010");
var john = new Contact("John Doe", "Alaska", "999-999-2302");

myAddressBook = new AddressBook([bozo,dog,jane,john]);

openAddressBook();