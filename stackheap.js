//stack & heap  
//stack is used for primitive datatypes
//Heap is used for non primitive

let myName = "rahimshekh";

let urName = myName;
urName ="prashanat";


console.log(urName);
console.log(myName);

let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne;

userTwo.email = "hitesh@google.com";

console.log(userOne.email);
console.log(userTwo.email);
