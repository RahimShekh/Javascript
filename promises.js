const promisOne = new Promise(function(resolve,reject)
{
    // do an sync task
    //db calls, cryptography,network calls
    setTimeout(function(){
        console.log("Async task is complete")
        resolve();
    },3000)
})

promisOne.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve,reject)
{
    setTimeout(function(){
        console.log("Async call two");
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})


//takin the data from resolve method

const promisThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "chai",email:"rahim@gmail.com"});
    },1000)
})
promisThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve,reject){

    setTimeout(function(){
        let error = true;
        if(!error)
        {
            resolve({username:"hitesh",password:"123"})
        }
        else
        {
            reject('Error: Something went wrong')
        }
    },1000)
})

promiseFour.then((user ) => {
    console.log(user);
    return user.username;

})
.then((username)=>{   // chaining
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(()=> console.log("finally") )

const promiseFive = new Promise(function(resolve,reject)
{
setTimeout(function(){
    let error = true
    if(!error)
    {
        resolve({username:"javascript",password:"123"})
    }
    else{
        reject('Error js went wrong');
    }
},1000)
})

async function consumepromise() {
    const promise = await promiseFive
}