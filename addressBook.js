/*
Linda and Kelsey

*/

function Contact(name, address, phone) {
		this.name = name;
		this.address = address;
		this.phone = phone;
}

Contact.prototype.view = function(){
	console.log(this.name + " lives at " + this.address + " and phone number is " + this.phone + ".");
};

function AddressBook(contacts) {
	this.contacts = contacts;
}

var bozo = new Contact("Bozo the Clown", "Circus", "333-543-4567");
var dog = new Contact("Spot the Dog", "The Doghouse", "123-456-7890");
var jane = new Contact("Jane Doe", "New York City", "101-555-1010");
var john = new Contact("John Doe", "Alaska", "999-999-2302");

myAddressBook = new AddressBook([bozo,dog,jane,john]);

console.log(myAddressBook.contacts);