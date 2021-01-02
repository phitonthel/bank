const fs = require('fs')

let typeArr = ['On Account', 'Xtra Payroll', 'Tabunganku']

let num = 60
let numofCustomers = 20

let output = []
for (let i = 0; i < num ; i++) {

  //type
  let typeIndex = Math.floor(Math.random()*typeArr.length)
  let type = typeArr[typeIndex]

  //balance
  let modifier = 50000
  let balance = ((Math.ceil(Math.random()*100))*modifier)+500000

  //account number
  let accountNumber = (Math.floor(Math.random()*10000000000))

  //CustomerId
  let CustomerId = Math.ceil(Math.random()*numofCustomers)
  
  let obj = {type,balance,accountNumber, CustomerId}
  output.push(obj)
}

// console.log(output);
output = JSON.stringify(output, null, 2)
fs.writeFileSync('./assets/accounts.json', output)