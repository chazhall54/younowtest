// main tester file must read action file
// save output to txt

const UserQueue = require("./userQueue");

const userQueue = new UserQueue()

// Read list
const fs = require('fs')

let file = fs.readFileSync('./actions.txt')

file = file.toString()

let listArr = file.split(/\n+/)
// console.log(listArr);

let actionsDone = []
//  forEach
listArr.forEach(action => {
    // console.log(action);
    actionsDone.push(action)
    const todo = action.split(',')[0]
    const value1 = action.split(',')[1]
    const value2 = action.split(',')[2]
    switch (todo) {
        case 'ADD':
            userQueue.addByID(value1)
            break;
        case 'REMOVE_USER':
            userQueue.removeByID(value1)
            break;
        case 'MOVE':

            userQueue.moveByPosition(value1, value2)
            break;
        case 'REVERSE':
            userQueue.reverse()
            break;
        case 'SWAP':

            userQueue.swapByPosition(value1, value2)
            break;
        case 'REMOVE_POSITION':

            userQueue.removeByPosition(value1)
            break;
        case 'PRINT':
            userQueue.print()
            console.log(`Actions done: ${actionsDone.length}`);
            break;
    
        default:
            break;
    }
});

// console.log(userQueue.addByID(1));
// console.log(userQueue.addByID(2));
// console.log(userQueue.addByID(3));
// console.log(userQueue.addByID(4));
// console.log(userQueue.addByID(5));
// console.log(userQueue.addByID(6));
// console.log(userQueue.removeByID(2));
// console.log(userQueue.removeByID(6));
// console.log(userQueue.removeByID(10));
// console.log(userQueue.moveByPosition(3,1));
// console.log(userQueue.reverse());
// console.log(userQueue.swapByPosition(6, 1));
// console.log(userQueue.removeByPosition(3));
// console.log(userQueue.removeByID(1));
// console.log(userQueue.reverse(6));
// console.log(userQueue.addByID(7));
// console.log(userQueue.addByID(8));
// console.log(userQueue.print());



