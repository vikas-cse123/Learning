// this refers to an obj which new keyword return it

function CreateUser(firstName, lastName, age) {
  (this.firstName = firstName), (this.lastName = lastName), (this.age = age);
}

CreateUser.prototype.birthYear = function () {
  return new Date().getFullYear() - this.age;
};
CreateUser.prototype.fullName = function () {
  return this.firstName + this.lastName;
};

const user1 = new CreateUser("vikas", "sahni", 21);
const user2 = new CreateUser("akash", "sahni", 23);
const user3 = new CreateUser("sagar", "sahni", 18);

// now only problem is that we are setting prototype outside
