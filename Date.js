let myDate = new Date();

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(typeof myDate);

let MyCreatedDate = new Date(2024,0,23); // months starts from 0 like array
console.log(MyCreatedDate.toString());

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1); // month zero se start hota
console.log(newDate.getDay());


