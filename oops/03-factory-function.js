function createUser(firstName, lastName, age) {
  const user = {
    firstName,
    lastName,
    age,
    birthYear() {
      return new Date().getFullYear() - user.age;
    },
  };
  return user;
}

const user1 = createUser("vikas", "sahni", 21);
const user2 = createUser("akash", "sahni", 23);
const user3 = createUser("sagar", "sahni", 18);

console.log(user1.birthYear === user2.birthYear);
//same function baar-baar create ho raha hai
//if we create 10 user then 10 function will be created and all the function  do same work.....
// esse accha  to pehle hi that jab humne ek fn bahar create kiya tha and uska object mai pass kar de rahe the
// to solve this issue of factory function:there is a constructor function

