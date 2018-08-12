var delay = (seconds) => new Promise((resolves, rejects) => {
    if(seconds > 4) {
        rejects(new Error(`Waiting ${seconds} seconds is too long`))
    }

    setTimeout(()=> {
        resolves('Hey, your wait has come to an end')
    }, seconds * 1000)
})

delay(10)
    .then((msg)=>{console.log(msg)})
    .catch((err)=> {console.log(`Error Occured : ${err.message}`)})