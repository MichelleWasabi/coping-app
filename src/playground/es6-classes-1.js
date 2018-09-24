class Person { //the structure HERE is meant for the computer
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        // return 'Hi ' + this.name + '!';
        return `Hi. I am a ${this.name}.`  //template strings can inject values and must use back ticks under esc. Cleaner look
    }

    getDescription() {
        return `${this.name} is ${this.age} years old. `
    }
}
class Student extends Person { //extends allow student to take on all the data from Person
    constructor(name, age, major) {
        super(name, age); //refers to the parent class so we can access the original data as is
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += `Her major is ${this.major}.`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, home) {
        super(name);
        this.home = home;
    }

    getGreeting() {
        let location = super.getGreeting(); //overrides the original method getGreeting from above

        if (this.hasLocation()) {
            location += ` I'm visiting from ${this.home} `;
        }
        return location;
    }

}

const me = new Traveler('Michelle W', 'Miami'); //the structure here is meant for humans to understand. 
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());
