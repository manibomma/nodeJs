var fs = require('fs')

var {promisify} = require('util')

var readDir = promisify(fs.readdir)

async function readDirectory() {
    console.log('Reading Directory...')
    try {
        var files = await readDir('<path of file>')
        console.log(files)
    } catch(error) {
        console.log(`Error : ${error.message}`)
    }
    
}

readDirectory()