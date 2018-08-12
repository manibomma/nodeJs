var delay = (seconds) => new Promise((resolves, rejects) => {
    setTimeout( () => {
        resolves('Wait ended')
    }, seconds * 1000)
})

delay(2)
    .then((msg)=>{console.log(msg)})