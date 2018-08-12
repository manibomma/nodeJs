function delay(seconds, callback) {
    setTimeout(callback, seconds * 1000)
}

console.log('Starting delay..')
delay(2, () => {
    console.log('delayed 2 seconds')
    delay(1, () => {
        console.log('delayed 3 seconds')
        delay(1, () => {
            console.log('delayed 4 seconds')
        })
    })
})