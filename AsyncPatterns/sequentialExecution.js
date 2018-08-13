var fs = require('fs')

var { promisify } = require('util')

var writeFile = promisify(fs.writeFile)
var unlinkFile = promisify(fs.unlink)

var beep = () => process.stdout.write('\x07')

var delay = (seconds) => new Promise((resolves, rejects) => {
    setTimeout(resolves, seconds * 1000)
})

var createAndUnlinkFile = () => Promise.resolve()
                            .then(() => console.log('Starting Operation..'))
                            .then(() => console.log('waiting..'))
                            .then(() => delay(2))
                            .then(() => writeFile('newSample.txt', 'This is a file created from sequentialExecution.js'))
                            .then(beep)
                            .then(() => console.log('File created successfully'))
                            .then(() => delay(10))
                            .then(() => unlinkFile('newSample.txt'))
                            .then(beep)
                            .then(() => console.log('File unlinked successfully'))
                            .catch((error) => console.log(`Error : ${error.message}`))

createAndUnlinkFile()