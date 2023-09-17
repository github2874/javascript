const name = "Anand"
const repoCount = 50

// console.log(name + repoCount + "Value")
//The above is not a good practice to write code in javascript

//Instead we should use backtics which has placeholders
//Using strign interpretation

console.log(`Hello my name is ${name} and my repo count is ${repoCount} `)


// Run const gameName = new String('Anand') an then run gameName in chrome console to see all the methods in prototype section

const gameName = new String('Anand')   //This is how a String is defined although its not necessary

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "    Anand     "
console.log(newStringOne);
console.log(newStringOne.trim());  ///Removes spaces before and after
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim

const url = "https://google.com/google%20home"
console.log(url.replace('%20','-'));
console.log(url.includes('amazon'));

const dashString = "This-is-a-string-wuth-dashes"
console.log(dashString.split('-'));
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
