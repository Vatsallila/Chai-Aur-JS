const accountId = 111111
let accountEmail = "vatsal@gmail.com"
var accountPassword = "123456"
accountCity = "Rajkot"
let accountState;

// accountId = 2 // Not Allowed

accountEmail = "abc@gmail.com"
accountPassword = "222222"
accountCity = "Junagadh"

console.log(accountId);

/*
    Prefer to not to use var 
    because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);