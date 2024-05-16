// Defines a constant.
const accountId = 2000080635

// Defines a variable in modern syntax. Proper way.
let accountEmail = "singhyashkun@gmail.com"

// Prefer not to use because of issue in block and functional scope.
var accountPassword = "123456789"

// Just declaring a variable 
accountCity = "Prayagraj"

// declaring a variable with no value. Value will be undefined.
let accountState

// Cannot change value of a constant.
// accountId = 2000080636

accountPassword = "987654321"
accountEmail = "yash.vardhan566@gmail.com"
accountCity = "Allahabad"



console.log(accountId)

console.table([accountEmail, accountId, accountPassword, accountCity, accountState])

accountState = "UP"

// console.log(accountState)
console.table([accountEmail, accountId, accountPassword, accountCity, accountState])