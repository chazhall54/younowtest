const fs = require('fs')

let file = fs.readFileSync('./actions.txt')

file = file.toString()

let list = file.split(/\n+/)

console.log(list.length);

list.forEach((action) => {
    console.log(action.split(',')[0]);
})

// const arr = ['dog', 'cat', 'bird']

// const printable = []

// arr.forEach((item) => {
//     // get position
//     const pos = arr.indexOf(item)
//     // get value
//     const val = item
//     // push new {}
//     printable.push({position: pos, value: item})
// })

// console.log(printable);

// arr.splice(1, 0, arr.splice(0, 1)[0])

// console.log(arr);

// console.log(arr);

// console.log([arr[0], arr[1]] = [arr[1], arr[0]]);

// console.log(arr);


