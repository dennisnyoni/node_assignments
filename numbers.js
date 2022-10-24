const add = require('./use_my_math').add;

console.log("sum of 2 and 3 is " + add(3, 2));


/*const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let numArray = [];
let index = 0;

function getNumber() {
    readline.question("Enter a number \n", number => {
        if (number.includes("stop")) {
            const sum = numArray.reduce((sum, num) => {
                return sum += parseInt(num);
            }, 0);
            console.log(`Sum : ${sum}`);
            readline.close();
        } else {
            numArray[index] = number;
            index++;
            getNumber();
        }
    });
}

getNumber();*/