//var c = 300
let a = 300
if(true)
{
    let a = 10;
    const b = 20;
    var c = 30;  // c = 30 bhi likhoge toh by default var hoga

    console.log(a);
    
}
console.log(a);
//console.log(b);
console.log(c);  // var can access 

for(var i = 0; i < 5; i++)
{
    console.log(i);
}
console.log("Var can access: "+i);


