


function Person(name, favFood) {
this.name = name;
this.food = favFood;
}

function Party() {
var attendees = [];

this.addAttendee = function(person){
attendees.push(person);
};
this.showAttendees = function() {
attendees.forEach(function(guest){
console.log(guest.name);
}); 
};
this.makePerson = function(name, favFood) {
//prompt for name and favd food
return new Person(name, favFood);
};

}

var nikkisHouse = new Party();
nikkisHouse.showAttendees();
nikkisHouse.makePerson("marc", "sushi");