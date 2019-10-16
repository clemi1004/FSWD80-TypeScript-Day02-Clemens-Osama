class person {
	firstName = "";
	lastName = "";
	age = "";
	jobtitle = "";

	constructor(firstName, lastName, age, jobtitle){
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.jobtitle = jobtitle;
	}

	whoIam(){
		return `Hello there, My name is ${this.firstName} ${this.lastName} and I am ${this.age} yeas old, and I am a ${this.jobtitle}`;
	}
}

var profesion = new person("Clemens", "Sauer", 29, "Chef")

console.log(profesion.whoIam());

// Create a class based on the Person class and add some other properties like salary, jobLocation and a function that will call the function that is inside the Person class and add “and I get (salary) every month, and I work in (jobLocation)”

class moreinformation extends person{
	salary = "";
	jobLocation = "";

	constructor(firstName, lastName, age, jobtitle, salary, jobLocation){
		super(firstName, lastName, age, jobtitle);
		this.salary = salary;
		this.jobLocation = jobLocation;
}

	whoIam() {
		return `${super.whoIam()} and I get ${this.salary} every month, and I work in ${this.jobLocation}.`;
	}
}

var profesion1 = new moreinformation("Clemens", "Sauer", 29, "Chef", "130k", "Vienna");

document.write(profesion1.whoIam());

// Create an App that has to offer four different of types of vehicles and list the vehicle models based on the selected panel. Once the user clicks on some vehicle show its details and possibility to view the price

//     Create a Parent Class called Vehicles
//     Define properties and methods for the super Class
//     Consider the inheritance concept
//     Define 2 other Child classes and name them Motor and Truck
//     Based on the personal vehicle performance model, kilometers left, number of seats, fuel type and year of production calculate the price once the user clicks on the button "show price" *use your dummy custom formula)