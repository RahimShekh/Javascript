//const Arr = [1,2,3,4,5,true,"rahim"]
const Arr =[1,2,3,4,5];
console.log(Arr[0]);


const Brr = new Array(1,2,3,3);

console.log(Brr[2]);

//Array methods
Arr.push(3)
console.log(Arr)

Arr.pop(2)
console.log(Arr) // last value will get delete

Arr.unshift(5)
console.log(Arr); // add the value at start

const newArr = Arr.join(); // array will convert in string

console.log(newArr);
console.log(typeof newArr)

// slice , splice

console.log("A",Arr);

const mynArr1 = Arr.slice(1,3);
console.log(mynArr1);

console.log("B",Arr);

const mynArr2 = Arr.splice(1,3);
console.log(mynArr2);

console.log(Arr); // by using splice method orginal array get manipulated

