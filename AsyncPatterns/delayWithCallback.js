var delay = (seconds, callback) => {
    if(seconds > 4) {
        callback(new Error(`Hey, can't wait more than 4 seconds`))
    } else {
        setTimeout(()=>{
            // a null has to be passed in place of error, if there is no error
            callback(null, `Hey, Waited for ${seconds} seconds`)
        }, seconds * 1000)
    }
}

delay(2, (error, msg)=>{
    if(error) {
        console.log(error.message)
    } else {
        console.log(msg)
    }
})