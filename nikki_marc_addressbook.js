/*Address Book assignment for Apprentice Gamma

1.) Create an address book which contains at least four entries.
Each entry should contain a person’s name, address, and phone number

2.) Your program should allow the user to: 
a.) add entries to the address book 
b.) delete entries from the address book 
c.) list all entries in the address book 
d.) search for an entry in the address book*/

var sget = require('sget');


AddressBook = [
	contacts[
		marc[],
		nikki[],
		paul[],
		batman[]

	]
];

//get the users


function Contact(name, address, phoneNumber){
	

	this.name= name;
	this.address= address;
	this.phoneNumber= phoneNumber;
	this.addNewContact= function(){
			var getName = sget('Enter a name: ');
			var getAddress = sget('Enter an address: ');
			var getAddress = sget('Enter a phone number: ');
		};
	this.deleteContact = function (){};
	this.searchContacts= function(){};
	this.listContacts=function (){};
};
var Marc = new Contact("Marc", "3123 Anystreet Rd.", "248 555-1212");
var Nikki = new Contact("Marc", "1234 Anystreet", "313 555-1212");
var Batman = new Contact("Bruce", "The Batcave", "313 BAT-CAVE");
var Paul = new Contact("Paul", "1520 Woodward Ave.", "313 555-1212");

console.log(Marc.name);

enterNewContact();