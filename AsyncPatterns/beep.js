var makeSound = process.stdout.write('\x07')  // Executes immediately. This is not a function. 
                                              // No need of calling it to get the action done

var beep = () => process.stdout.write('\x07')  // making beep as a function

var delay = (seconds) => new Promise((resolves) => {
    setTimeout(resolves, seconds * 1000)
}) 

delay(2)
    .then(beep)   // calling beep with no args
    .then(() => delay(1))   // When we want to call as a function we should pass the args " () => " 
    .then(() => beep())  // this is equivalent to the call made in line 11, except that we are calling it 
                         // by passing empty args
    .then(console.log) // console.log takes the first argument returned by the previous call and prints it
                       // the same statement is equivalent to " .then((msg) => {console.log(msg)})"