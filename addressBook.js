/*
Linda and Kelsey

*/

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

var bozo = new Contact("Bozo the Clown", "Circus", "333-543-4567");
var dog = new Contact("Spot the Dog", "The Doghouse", "123-456-7890");
var jane = new Contact("Jane Doe", "New York City", "101-555-1010");
var john = new Contact("John Doe", "Alaska", "999-999-2302");

myAddressBook = new AddressBook([bozo,dog,jane,john]);

var matt = new Contact("Matt Doe", "LA", "888-909-9000");
console.log("-----------------------")
myAddressBook.delete(dog);
myAddressBook.list();