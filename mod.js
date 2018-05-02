// "use strict"

    function Person(firstName, lastName, age) {
          this.firstName = firstName;
          this.lastName = lastName;
          this.age      = age;
          console.log(this)
    }
     
     let p = new Person("John", "Smith", 43);
     console.log(p);
     
     function Pet(name) {
         this.name = name;
     }
     
     Pet.prototype.eat = function()  {
         console.log(`${this.name} is eating...`);
     }
     
     function Dog(name, breed) {
         Pet.call(this, name)
         this.breed = breed ;
     }
     
     Dog.prototype = Object.create(Pet.prototype);
     
     Dog.prototype.play = function() {
         console.log(`${this.name} is playing...`);
     }
     
     var max = new Dog("Max", "Golden Retriever");
     max.play();
     max.eat();
    
console.log(max)

class Pet1 {
      constructor(name) {
          this.name = name;
      }
      
      eat() {
           console.log(`${this.name} is eating...`);
      }
}

class Dog1 extends Pet1 {
          constructor(name, breed) {
          super(name);
          this.breed = breed;
      }
      
      play() {
          console.log(`${this.name} is playing ...`);
      }
}

let max2 = new Dog1("max2", "Another type");
max2.play();
max2.eat();
console.log(max2);

class Profile {
    
    constructor(user) {
        this.user = user;
    }
    
    createUsername(user) {
        return `${user.firstName}.${user.lastName}`;
    }
    
    createProfileUrl(domain, username) {
        return `${domain}/${username}`;
    }
}

let user = {
    id: 123, 
    firstName: 'ardeshir', 
    lastName: 'org'
};

let man = new Profile(user);
let profileUrl = man.createProfileUrl("http://ardeshir.org", man.createUsername(user));
console.log(profileUrl);
console.log(man);
