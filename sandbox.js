let num = 1500000
let numFormatted = num.toLocaleString('en-ID', {style: 'currency', currency: 'IDR'});

console.log(numFormatted);