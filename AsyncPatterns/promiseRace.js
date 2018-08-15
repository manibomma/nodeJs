var delay = (seconds) => new Promise((resolves, rejects)=> {
    setTimeout(resolves, seconds * 1000)
})

Promise.race([
    delay(5),
    delay(3),
    delay(7),
    delay(10),
    delay(3)
])
.then(()=> 'All promises are being resolved parallelly, finished the smallest Promise among them.\nYou still have to wait for the completion of others')
.then(console.log)