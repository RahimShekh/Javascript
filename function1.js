
function calculatecart(...num1) // ... rest operator
{
    return num1;
}
console.log(calculatecart(200))
console.log(calculatecart(200,400,500))

function demo(val1,val2,...num)
{
    return num;
}
console.log(demo(34));
console.log(demo(2,33,44,22,1,11))

const user ={
    username:"rahim",
    price:199
}

function product(anyobj)
{
    console.log("name is"+user.username+"and price is"+user.price)
}

product(user);

//we can pass array and obj also to function
