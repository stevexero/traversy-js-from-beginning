// const sayHello = function() {
//   console.log('Hello');
// };

// const sayHello = () => {
//   console.log('Hello');
// };

// One line function does not need brackets
// const sayHello = () => console.log('Hello');

// One Line returns
// const sayHello = () => 'Hello';

// sayHello();

// Return object
// const sayHello = () => ({
//   msg: 'Hello'
// });

// Single param, no need for parenthesis
// const sayHello = name => `Hello ${name}`;

// Multiple params, parens needed
// const sayHello = (fname, lname) => console.log(`Hello ${fname} ${lname}`);

// sayHello('syeve', 'woow');

const users = ['Nathan', 'John', 'Will'];

// const nameLengths = users.map(function(name) {
//   return name.length;
// });

// SHorter
// const nameLengths = users.map(name => {
//   return name.length;
// });

// Shortest
const nameLengths = users.map(name => name.length);

console.log(nameLengths);
