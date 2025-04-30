function one()
{
    const username = " hitesh";
    
    function two()
    {
        const website = " youtube";
        console.log(username);
        
    }
    //console.log(website);
    two();
}
one();

// two function one ke variables ko acces kar sakta hai isi ko closure kehte hai

if(true)
{
    const username = "rahim"
    if(username === "rahim")
    {
        const website = " discord";
        console.log(username + website);
    }
    //console.log(website);
}
//console.log(username)

//++++++++++++++++++++interesting+++++++++++++++++++++++


//console.log(addone(5))   run hojayega
function addone(num)
{
    return num+1;
}

addone(5);

//console.log(addtwo(5))    error aayega  hoisting concepts
const addTwo = function(num)
{
    return num +2;
}

addTwo(5);