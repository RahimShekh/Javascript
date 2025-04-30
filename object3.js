const myObject ={
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    py : 'python'
}
//for in loop

for(const key in myObject)
{
    console.log(myObject[key]);
    console.log(key); // only keys will print
    
}

const programming = ["js","cpp","python","java"];

for(let i in programming)
{
    console.log(programming[i]);
    console.log(i) // will print the index arr index is by default keys
}


const coding =["java","python","html","css"]

coding.forEach(function (iVal){
    console.log(iVal)
} )

coding.forEach((iVal)=>{
    console.log(iVal)  // by using arrow function
})

//objects inside array
//[{},{},{}]
const demo =[
    {
        languageName  : "script",
        languagefile: "js"
    },
    {
        Name: "java",
        pro:"good"
    }
]

demo.forEach((item) => {
    console.log(item.languageName);
})