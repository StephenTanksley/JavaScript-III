/* The four principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. When a function is inside the global scope, 'this' refers to the window/console object.
* 2. When used with dot notation, the object before the dot is what 'this' is referring to.
* 3. Whenever we're using a constructor function, 'this' refers to the specific instance of that object that's created and returned by the constructor function.
* 4. Whenever we're using the call or apply methods, the object that 'this' is referring to is explicitly defined. This is as specific as we go.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
// We're using a function inside the global scope, so the 'this' refers to the entire window/console here.

// function sayName(name) {
//     console.log(this);
//     return name;
// }
// sayName('Stephen');

// // Principle 2

// // code example for Implicit Binding
// // It is implied that since we're using dot notation, whatever is to the left of the dot is the object we're referring to.

// const myObj = {
//     greeting: 'Hello', 
//     sayHello: function(name) {
//         console.log(`${this.greeting} my name is ${name}`);
//         console.log(this);
//     }
// };
// myObj.sayHello('Stephen');

// Principle 3

// code example for New Binding

// function CordialPerson(greeter) {
//     this.greeting = 'Hello ';
//     this.greeter = greeter;
//     this.speak = function() {
//         console.log(this.greeting + this.greeter);
//         // console.log(this);
//     };
// }

// const jerry = new CordialPerson('Newman');
// const newman = new CordialPerson('Jerry');

// jerry.speak();
// //when Jerry speaks, he references the argument that was provided in CordialPerson('Newman'). 
// //This is passed along via the 'this' bindings - this.greeting = 'Hello ' plus this.greeter = greeter (which we already provided a value for via the argument.)

// newman.speak();

// //Same thing here when Newman speaks, except in this case Jerry has been provided as the argument instead of Newman's name.

// Principle 4

// code example for Explicit Binding

function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
        console.log(this.greeting + this.greeter);
        console.log(this);
    };
}

const jerry = new CordialPerson('Newman');
const newman = new CordialPerson('Jerry');

jerry.speak.call(newman);
//with jerry.speak.call, we've re-bound jerry to reference newman instead. So now that we've re-bound jerry to newman, the jerry CordialPerson is going to behave like newman.

newman.speak.apply(jerry);
//likewise with newman.speak.apply, we've re-bound newman to reference jerry instead. It will behave like jerry instead of newman and will take the arguments that the original jerry object used. The difference here is only that .apply will expect a second argument to be an array that it uses as arguments for the function.

jerry.speak();
newman.speak();