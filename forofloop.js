// for of

const arr = [1,2,3,4,4]

for (const i of arr) {
    
    console.log(i)
}

const str ="rahim"

for(const i of str)
{
    console.log(i);
}

// maps
const map = new Map()
map.set('rahim','nanded')
map.set('zimpya','cidco')

console.log(map);

for(const i of map)
{
    console.log(i); // array type mein print hoga
}

for(const[key,value] of map)
{
    console.log(key,":",value); // will print like map
}
