const score = 400

const balance = new Number(100)  //new used to declare number
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));  // used to get upto 2 points after decimal

const otherNumber = 8296.1646
console.log(otherNumber.toPrecision(5));

const nextNumber = 100000
console.log(nextNumber.toLocaleString());   //Adds comma as per US standard
console.log(nextNumber.toLocaleString('en-IN'));   //Adds comma as per Indian standard

/*
To learn about Number
=> Go to console and type Number
Futher you can add . and search many other methods
*/


//+++++++++++++++++++++++++ Maths ++++++++++++++++++//

console.log(Math);    //Run in console to learn more
console.log(Math.abs(-5));
console.log(Math.round(5.6));
console.log(Math.ceil(5.2))   //Gives the top number
console.log(Math.floor(5.9));  //Gives the lowest number
console.log(Math.max(4,5,6,15,5,26,6));

console.log(Math.random());   //RAndom number from 0 to 1
console.log(Math.random()*10);  //Random number from 0 to 10
console.log((Math.random()*10)+1); //Random number greater than 0 upto 10
// use can also use floor method to get a integer


//++++++++ IMPORTANT +++++++++++//
//RAndom number from a minimum to maximium range
const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1)) + min);