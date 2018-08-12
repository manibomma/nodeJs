var { promisify } = require('util')

var delay = (seconds, callback) => {
    if(seconds > 3) {
        callback(new Error(`Hey, can't wait for more than 4 seconds`))
    } else {
        setTimeout(()=> {
            callback(null, `Hey, waited for ${seconds} seconds`)
        }, seconds * 1000)
    }
}

var delayPromise = promisify(delay)

delayPromise(2)
    .then((msg)=>{console.log(msg)})
    .catch((error)=>{console.log(error.message)})