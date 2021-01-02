const fs = require('fs')

let maleNameArr = ['Bartolomeus', 'Delphito', 'Alexander', 'Agung', 'Satriya', 'Hifzhan', 'Farhad', 'Wendy', 'Isro', 'Taufiq', 'Kemal']
let femaleNameArr = ['Ayu', 'Stefani', 'Kwan', 'Nadia', 'Riantini', 'Devita', 'Sari', 'Afifah']
let addressArr = ['Sukamaju', 'Sukamundur', 'Sukasuka', 'Sukarejo', 'Sukaharjo']

let num = 20

let output = []
for (let i = 0; i < num ; i++) {
  let gender, firstName, lastName

  //gender
  Math.random() < 0.5 ? gender = 'Male' : gender = 'Female'

  //name -> correlated to gender
  if (gender == 'Male') {
    firstName = Math.ceil(Math.random()*maleNameArr.length-1)
    lastName = Math.ceil(Math.random()*maleNameArr.length-1)

    firstName = maleNameArr[firstName]
    lastName = maleNameArr[lastName]
  }
  if (gender == 'Female') {
    firstName = Math.ceil(Math.random()*femaleNameArr.length-1)
    lastName = Math.ceil(Math.random()*femaleNameArr.length-1)

    firstName = femaleNameArr[firstName]
    lastName = femaleNameArr[lastName]
  }

  //address
  let city = addressArr[Math.floor(Math.random()*(addressArr.length))]
  let rt = Math.ceil(Math.random()*999)
  let rw = Math.ceil(Math.random()*999)
  let address = `${city}, RT ${rt}, RW ${rw}`

  //birth date
  let year = (Math.ceil(Math.random()*25))+1950
  let month = (Math.ceil(Math.random()*12))
  let date = (Math.ceil(Math.random()*28))
  let birthDate = `${year}-${month}-${date}`

  //account number
  // let accountNumber = (Math.ceil(Math.random()*1000000000))
  
  let obj = {
    identityNumber: i+1,
    fullName: firstName + ' ' + lastName,
    address: address,
    birthDate: birthDate,
    gender: gender
  }
  output.push(obj)
}

// console.log(output);
output = JSON.stringify(output, null, 2)
fs.writeFileSync('./assets/customers.json', output)