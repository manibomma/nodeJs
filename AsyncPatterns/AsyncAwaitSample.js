var fs = require('fs')

var {promisify} = require('util')

var writeFile = promisify(fs.writeFile)
var unlinkFile = promisify(fs.unlink)

var beep = () => process.stdout.write('\x07')

var delay = (seconds) => new Promise((resolves, rejects) => {
    setTimeout(resolves, seconds * 1000)
})

var createAndUnlinkFile = async () => {
    console.log('starting..')
    await delay(1)
    console.log('waiting..')
    await writeFile('asyncAwaitFile.txt', 'This file is created by Async Await pattern')
    beep()
    console.log('File creation successful')
    await delay(10)
    await unlinkFile('asyncAwaitFile.txt')
    beep()
    console.log('File removed')
}

createAndUnlinkFile()