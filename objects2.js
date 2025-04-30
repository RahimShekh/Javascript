//const tinderUser = new Object()   // singleton obj

const tinderUser = {}                 // non singleton obj

tinderUser.id ="123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false;
console.log(tinderUser);

// object nesting

const regularUser ={
    email:"rahim@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname: " shekh"
        }
    }
}

console.log(regularUser.fullname)

// obj combine
const obj1={
    1:"a",
    2:"b",  
}
const obj2 ={
    3:"c",
    4:"d"
}

//const obj3 ={obj1,obj2}

//const obj3 = Object.assign(obj1,obj2) // for combining objects
const obj3 ={...obj1,...obj2};  // easy step to combine objects
console.log(obj3)


