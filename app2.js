/*******************************************************
 *  YOU MUST USE THE LATEST node 
 * root@ardeshir ~/javascript (master) $ nvm use v9.4.0
   Now using node v9.4.0 (npm v5.6.0)
   root@ardeshir ~/javascript (master) $ node -v
   v9.4.0
   root@ardeshir ~/javascript (master) $ npm start

********************************************************/

import Person from './person';
import  { checkID, greet, printP } from './utils';
import  HttpClient  from './http-client';
import  PostManager  from './post-manager';

let p = new Person("Ardeshir", "Sepahsalar", 47);

printP(p);
greet(p);
checkID(p);

let postManager = new PostManager(new HttpClient()) ;

postManager.printPosts(); 


/********************************************************
var axios = require("axios");

axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log("First post: ", response.data[0]) 
});

// live-server .  --port=9000 --host=0.0.0.0


   function log(msg) {
       console.log(msg);
   }

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
log(max2);

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
log(profileUrl);
log(man);

let readings = {
    coreTemp: 74,
    additionalTemp: 80,
    readingA: 178,
    readingB: 120,
    readingC: - 190
}

function adjustReadings(readings){
    readings.readingA -= 20;
    readings.readingB += readings.coreTemp/2;

    return readings;
}


function testReadingA(readingA) {
    return readingA >= 170;
}

log("Reading before: ");
log(readings);

// adjustReadings(readings);
let newreadings = adjustReadings({...readings})
// log(testReadingA(readings.readingA));

log("Reading after: ");
log(readings);

log("New Readings: ");
log(newreadings);

****************** */
