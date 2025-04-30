// singleton
//object.create

// object literals

const mySym = Symbol("key1");

const jsUser ={
    name:"hitesh",  // key:value
    "full name":"Hitesh chaoudhary",
    [mySym]:"mykey",   // symbol declared in object
    age:18,
    location:"jaipur",
    email:"hitesh@google.com",
    isLoggedIn: false,
    LastLoginDays:["Monday","Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"])
// console.log(jsUser."full name"); // invalid sntax
console.log(jsUser[mySym])
console.log(jsUser.mySym); // undefined

jsUser.location = "nandedd"; // value change ya overwrite

console.log(jsUser.location);

Object.freeze(jsUser)  // koi change nhii karpayega

jsUser.age = 25

console.log(jsUser)
