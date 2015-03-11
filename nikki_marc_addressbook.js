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
	selectedOption=sget("Welcome to your Address Book!\n (1) Add a contact\n (2) Delete a contact\n (3) View address book\n (4) Search your address book").trim();

	switch(selectedOption){
		case "1":
		ourAddressBook.addNewContact();
		console.log("You have added...");
		console.log(ourAddressBook.contacts[ourAddressBook.contacts.length-1]);
		openAddressBook();
		break;

		case "2":
		ourAddressBook.deleteContact();
		openAddressBook();
		break;

		case "3":
		ourAddressBook.listContacts();
		openAddressBook();
		break;

		case "4":
		ourAddressBook.searchContacts();
		openAddressBook();
		break;

		default:
		console.log("Invalid input please select another option");
		openAddressBook();

	}

}
function Contact(name, address, phoneNumber){
	this.name = name;
	this.address = address;
	this.phoneNumber = phoneNumber;
};

function AddressBook() {
	//var contacts;
	this.contacts = [
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
			this.contacts.push(contact);
			return this.contacts;
		};
	this.deleteContact = function (){
		var personToDelete = sget("To delete a contact from your address book, please enter the contact's name").trim();
		for (i=0; i < this.contacts.length; i++){ 
			if (this.contacts[i].name===personToDelete){
				console.log("You have removed...");
				console.log(this.contacts.splice(i,1));
			} 
		}
	};
	this.searchContacts= function(){
		var personNeeded = sget("To search your address book please enter the contact's name").trim();
		for (i=0; i < this.contacts.length; i++){ 
			if (this.contacts[i].name===personNeeded){
				console.log(this.contacts[i]);
			} 
		}
	};
	
	this.listContacts=function(){
		for (i=0; i < this.contacts.length; i++){
	
			console.log("Name: " + this.contacts[i].name + "\nAddress: " + this.contacts[i].address + "\nPhone: " + this.contacts[i].phoneNumber + "\n");  
		}
	};
};

var ourAddressBook = new AddressBook();
openAddressBook();

/*console.log(ourAddressBook.addNewContact());

ourAddressBook.listContacts();
ourAddressBook.deleteContact();*/



