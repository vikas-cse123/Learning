  //createUser is a function but behind the scenes it is an object so we can store property in it
function createUser(firstName, lastName, age) {
    const user = {
      firstName,
      lastName,
      age,
      birthYear:createUser.commonMethods.birthYear
    };
    return user;
  }
  createUser.commonMethods={
    birthYear:function() {
      return new Date().getFullYear() - this.age;
    }
  }
const user1 = createUser("vikas", "sahni", 21);
const user2 = createUser("akash", "sahni", 23);
const user3 = createUser("sagar", "sahni", 18);