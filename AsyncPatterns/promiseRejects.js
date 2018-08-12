var delay = (seconds) => new Promise((resolves, rejects) => {
    throw new Error("Promise rejected")

    setTimeout(()=> {
        resolves('Hey, your wait has come to an end')
    }, seconds * 1000)
})

delay(2)
    .then((msg)=>{console.log(msg)})
    .catch((err)=> {console.log(`Error Occured : ${err.message}`)})