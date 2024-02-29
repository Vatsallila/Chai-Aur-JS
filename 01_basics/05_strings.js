const name = "Vatsal"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello My name is ${name} and my repo Count is ${repoCount}`);

const gameName = new String('Vatsall')  

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-6, 4)
console.log(anotherString);

const newStringOne= "  Vatsal     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://VAtsal.com/vatsal%20lila"
console.log(url.replace('%20', '-'))

console.log(url.includes('kumar'))

console.log(gameName.split('-'))
