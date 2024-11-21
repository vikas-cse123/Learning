function   birthYear() {
    return new Date().getFullYear() - this.age;
  }

function createUser(firstName, lastName, age,birthYear) {
    const user = {
      firstName,
      lastName,
      age,
      birthYear
    
    };
    return user;
  }
  
const user1 = createUser("vikas", "sahni", 21,birthYear);
const user2 = createUser("akash", "sahni", 23,birthYear);
const user3 = createUser("sagar", "sahni", 18,birthYear);

// here polymorphism is achieved 
//but abstraction is breaked
// encapsulation is also breaked
//global space ko pollute kar diya
