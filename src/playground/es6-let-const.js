// practice assigning and scope

var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Jule'; //can reassign let but cannot redeclare 
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);


function getPetName() {
    var petName = 'Hal';
    return petName;
}

const petName = getPetName();
console.log(petName);


// // var based variables are function scoped
// var fullName = 'Michelle Wiltshire';

// if (fullName) {
//     var firstName = fullName.split(' ')[0];
//     console.log(firstName);
// }

// console.log(firstName);

// Block scoping includes const and let so cannot access outside of fucntion

var fullName = 'Michelle Wiltshire';

if (fullName) {
    const firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);