const person = {
    name: 'Mike',
    age: 25,
    greet() {
        console.log('Hi, I am ' + this.name);
    } 
}

const  printName = (person) => {
    console.log(person.name);
};
const  printsecName = ({name}) => {
    console.log(person.name);
};

printName(person);
printName(person);

// const hobbies = ['Gym', 'Sex'];

// /* for(let hobb of hobbies){
//     console.log(hobb); 
// } */

// const cpy = [...hobbies];

// console.log(cpy);
// console.log(hobbies.map(hobby => 'hobby:' + hobby));

// const toArray = ( ...args) => args;
// console.log(toArray(1,2,3,4));
