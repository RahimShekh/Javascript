const user ={
    username:"hitesh",
    price:999,

    welcomeMesage: function()
    {
        console.log(this.username+" welcome to website");   
        console.log(this)     
    }
}
// user.welcomeMesage()
// user.username = "sam";
// user.welcomeMesage()

console.log(this)

// browser ke ander jo global object hai voh window obj hai

function chai()
{
    let username = " hitesh"
    console.log(this.username); // this only works for objects
}


chai();

const fun = () => {               // arrow function
    let username = ' hiriye';
    console.log(this);
}

const Two = (num1, num2) => {
    return num1 + num2;
}

console.log(Two(4,4))

//const addTwo = (num1,num2) => num1 + num2;  other way to write


