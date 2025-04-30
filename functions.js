function demo()
{
    console.log("hi");
}

//demo()   // call by refernce

function Sum(number1, number2)
{
    sum = number1 + number2;

    console.log(sum);
    return sum;
    //return number1 + number2
}

const result = Sum(3,5); // call by value

console.log(sum)

function loginUser(username)
{
    return '${username} just logged in' 
}

//console.log(loginUser("rahim"))
