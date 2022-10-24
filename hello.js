const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question("what is your name?", name => {
    console.log(`Welcome ${name}`);
    readline.question("How old are you?", age => {

        if (age < 16) {
            console.log("You are not allowed to drive in Iowa");
        } else {
            console.log("You are allowed to get a driver's license in Iowa");
        }
        readline.close();
    });


});