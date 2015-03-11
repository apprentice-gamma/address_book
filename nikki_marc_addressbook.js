/*Address Book assignment for Apprentice Gamma

1.) Create an address book which contains at least four entries.
Each entry should contain a person’s name, address, and phone number

2.) Your program should allow the user to: 
a.) add entries to the address book 
b.) delete entries from the address book 
c.) list all entries in the address book 
d.) search for an entry in the address book*/

var sget = require('sget');

function openAddressBook (){
	console.log("Welcome to your Address Book!");

}
function Contact(name, address, phoneNumber){
	this.name = name;
	this.address = address;
	this.phoneNumber = phoneNumber;
};

function AddressBook() {
	var contacts = [
		{name: "Marc", address: "1520 Woodward", phoneNumber: "313 555-1212"},
		{name: "Nikki", address: "1528 Woodward", phoneNumber: "313 555-1212"},
		{name: "Paul", address: "1520 Woodward", phoneNumber: "313 555-1222"},
		{name: "Batman", address: "The Batcave", phoneNumber: "313 BAT-CAVE"}
	];

	this.addNewContact= function(){
			var getName = sget('Enter a name: ').trim();
			var getAddress = sget('Enter an address: ').trim();
			var getPhone = sget('Enter a phone number: ').trim();
			var contact = new Contact(getName, getAddress, getPhone);
			contacts.push(contact);
			return contacts;
		};
	this.deleteContact = function (){
		var personToDelete = sget("To delete a contact from your address book, please enter the contact's name").trim();
		for (i=0; i < contacts.length; i++){ 
			if (contacts[i].name===personToDelete){
				console.log(contacts.splice(i,1));
				console.log(contacts);
			} 
		}
	};
	this.searchContacts= function(){
		var personNeeded = sget("To search your address book please enter the contact's name").trim();
		for (i=0; i < contacts.length; i++){ 
			if (contacts[i].name===personNeeded){
				console.log(contacts[i]);
			} 
		}
	};
	
	this.listContacts=function(){
		for (i=0; i < contacts.length; i++){
	
			console.log("Name: " + contacts[i].name + "\nAddress: " + contacts[i].address + "\nPhone: " + contacts[i].phoneNumber + "\n");  
		}
	};
};

var ourAddressBook = new AddressBook();

/*console.log(ourAddressBook.addNewContact());

ourAddressBook.listContacts();*/
ourAddressBook.deleteContact();



