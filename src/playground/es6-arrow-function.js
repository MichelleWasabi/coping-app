
// const square = function (x) {
//     return x * x;
// };
// arrow functions are anonymous so assigned to const, let, or var
// const squareArrow = (x) => {
//     return x * x;
// };

// implicit return simplified because it's a simple return 
// const squareArrow = (x) => x * x;


// console.log(squareArrow(4));

//challenge 

// const getFirstName = (fullName) => {
//     return fullName.split(' ')[0];
// };

// const getFirstName = (fullName) => fullName.split(' ')[0];
// console.log(getFirstName('Bill Wiltshire'));


// second part of arrow functions
// arguments object - longer bound with arrow func

// const add = function (a, b) {
//     // console.log(arguments);
//     return a + b;
// }
// console.log(add(55, 1));

// this keyword no longer bound

// const user = {
//     name: 'Michelle',
//     cities: ['NYC', 'Miami', 'Chicago'],
//     printPlacesLived: function () {
//         this.cities.forEach((city) => {
//             console.log(this.name + ' has lived in ' + city);
//         });
//     }
// }

// user.printPlacesLived();

// or

// const user = {
//     name: 'Michelle',
//     cities: ['NYC', 'Miami', 'Chicago'],
//     printPlacesLived() {
//         this.cities.forEach((city) => {
//             console.log(this.name + ' has lived in ' + city);
//         });
//     }
// }

// user.printPlacesLived();

const user = {
    name: 'Michelle',
    cities: ['NYC', 'Miami', 'Chicago'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
        // console.log(this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 6],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((foo) => foo * this.multiplyBy);
    }
}
console.log(multiplier.multiply());