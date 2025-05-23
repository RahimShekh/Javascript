function sum(a, b)
{
    return a + b;
}

function divide(a , b)
{
    return a/b;
}
function callbackk(a,b,dum)
{
    return dum(a,b);
}

const ans = sum(2,4);
console.log(ans);

const iCall = callbackk(5,6,sum);  // yaha sum() withough parenthesis hai
const iDiv = callbackk(5,6,divide);

console.log(iCall);
console.log(iDiv);