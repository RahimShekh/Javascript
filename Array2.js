const marvel_Heroes = ["thor","ironman","spiderman"];
const dc_Heroes =["superman","Batman","flash"];

// marvel_Heroes.push(dc_Heroes);

// console.log(marvel_Heroes);

// marvel_Heroes.concat(dc_Heroes);

// console.log(marvel_Heroes);

const allHeros = marvel_Heroes.concat(dc_Heroes); // to combine two arrays
console.log(allHeros);

const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_arr = another_arr.flat(Infinity); // remove nested 

console.log(real_arr);

console.log(Array.isArray("Rahim"));
console.log(Array.from("Rahim"));
console.log(Array.from({name: "rahim"})) // intersting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

