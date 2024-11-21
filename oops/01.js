const user1 = {
    firstName:"Vikas",
    lastName:"Sahni",
    age:21,
    birthYear(){
        return new Date().getFullYear()-user.age
    
    }
}




console.log(user1.birthYear());
