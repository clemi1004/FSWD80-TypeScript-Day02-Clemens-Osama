var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var person = /** @class */ (function () {
    function person(firstName, lastName, age, jobtitle) {
        this.firstName = "";
        this.lastName = "";
        this.age = "";
        this.jobtitle = "";
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.jobtitle = jobtitle;
    }
    person.prototype.whoIam = function () {
        return "Hello there, My name is " + this.firstName + " " + this.lastName + " and I am " + this.age + " yeas old, and I am a " + this.jobtitle;
    };
    return person;
}());
var profesion = new person("Clemens", "Sauer", 29, "Chef");
console.log(profesion.whoIam());
// Create a class based on the Person class and add some other properties like salary, jobLocation and a function that will call the function that is inside the Person class and add “and I get (salary) every month, and I work in (jobLocation)”
var moreinformation = /** @class */ (function (_super) {
    __extends(moreinformation, _super);
    function moreinformation(firstName, lastName, age, jobtitle, salary, jobLocation) {
        var _this = _super.call(this, firstName, lastName, age, jobtitle) || this;
        _this.salary = "";
        _this.jobLocation = "";
        _this.salary = salary;
        _this.jobLocation = jobLocation;
        return _this;
    }
    moreinformation.prototype.whoIam = function () {
        return _super.prototype.whoIam.call(this) + " and I get " + this.salary + " every month, and I work in " + this.jobLocation + ".";
    };
    return moreinformation;
}(person));
var profesion1 = new moreinformation("Clemens", "Sauer", 29, "Chef", "130k", "Vienna");
document.write(profesion1.whoIam());
