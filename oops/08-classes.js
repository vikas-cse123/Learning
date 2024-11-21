//it is just syntax sugar of constructor function. nothing new
class CreateUser {
  constructor(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age

  }
  birthYear() {
    return new Date().getFullYear() - this.age;
  };
  fullName() {
    return this.firstName + this.lastName;
  };
}

const user1 = new CreateUser("vikas", "sahni", 21);
const user2 = new CreateUser("akash", "sahni", 23);
const user3 = new CreateUser("sagar", "sahni", 18);




