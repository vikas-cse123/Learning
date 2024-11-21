//it is just syntax sugar of constructor function. nothing new

// function CreateUser(){ <-----it is the syntx of constructor fn to make to class just replace function with class and remove parenthesis of parameters
    
// }

class CreateUser{
  
    
    constructor(firstName,lastName,age){
        console.log(1);
        

        this.firstName=firstName
        this.lastName=lastName
        this.age=age

    }
    
   
    
    birthYear() {
        return new Date().getFullYear() - this.age;
      };
      fullName() {
        return this.firstName + this.lastName;
      };
}
debugger
const user1 = new CreateUser("vikas", "sahni", 21);
// const user2 = new CreateUser("akash", "sahni", 23);
// const user3 = new CreateUser("sagar", "sahni", 18);

  
