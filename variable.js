const AccountId = 14432;
let accountEmail = "rahimshekh@gmail.com";
var accountPass = "Nanded";
accountCity = "Pune";  // not good programming practice
let accountState;  // will print undefined

// AccountId = 23; we cant update bcuz its const
accountEmail = "rahim@gmail.com";
accountPass = "Parbhani";
accountCity = " Bengaluru";

console.log(AccountId);

console.table([accountEmail,accountPass,accountCity,AccountId]); // table mein print hoga
/*
prefer not to use var bcuz of issue in block scope and functional scope
*/
