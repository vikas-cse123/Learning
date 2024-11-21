// 1
// You are already familiar with an HTML class, but JavaScript also has a class. In JavaScript, a class is like a blueprint for creating objects. It allows you to define a set of properties and methods, and instantiate (or create) new objects with those properties and methods.

// The class keyword is used to declare a class. Here is an example of declaring a Computer class:

// Example Code
// class Computer {};




// 2
// Classes have a special constructor method, which is called when a new instance of the class is created. The constructor method is a great place to initialize properties of the class. Here is an example of a class with a constructor method:

// Example Code
// class Computer {
//   constructor() {
//   }
// }



//3
// The this keyword in JavaScript is used to refer to the current object. Depending on where this is used, what it references changes. In the case of a class, it refers to the instance of the object being constructed. You can use the this keyword to set the properties of the object being instantiated. Here is an example:

// Example Code
// class Computer {
//   constructor() {
//     this.ram = 16;
//   }
// }