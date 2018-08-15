
var delay = (seconds) => new Promise((resolves, rejects) => {
    setTimeout(resolves, seconds * 1000)
})

Promise.all([
    delay(5),
    delay(3),
    delay(7),
    delay(10),
    delay(3)
])
.then(()=>'Finished all the promises parallelly.\nTotal delay is the time taken to resolve the longest promise in the array')
.then(console.log)