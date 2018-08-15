var logUpdate = require('log-update')

var toX = () => 'X'
var delay = (seconds) => new Promise((resolves, rejects)=> {
    setTimeout(resolves, seconds * 1000)
})

var tasks = [
    delay(10),
    delay(5),
    delay(7),
    delay(10),
    delay(3),
    delay(15),
    delay(12),
    delay(8),
    delay(4),
    delay(11),
    delay(2),
    delay(8),
    delay(3)
]

class PromiseQueue {
    constructor(promises = [], concurrentCount = 1) {
        this.concurrent = concurrentCount
        this.total = promises.length
        this.todo = promises
        this.running = []
        this.completed = []
    }

    get runAnother() {
        return this.todo.length && (this.running.length < this.concurrent)
    }

    graphTasks() {
        var {todo, running, completed} = this
        logUpdate(`
            todo      : [${todo.map(toX)}]
            running   : [${running.map(toX)}]
            completed : [${completed.map(toX)}]
        `)
    }

    run() {
        while(this.runAnother) {
            var promise = this.todo.shift()
            promise.then(() => {
                this.completed.push(this.running.shift())
                this.graphTasks()
                this.run()
            }).catch((error) => {console.log(`Error : ${error.message}`)})
            this.running.push(promise)
            this.graphTasks()
        }
    }
}

var taskQueue = new PromiseQueue(tasks, 2)
taskQueue.run()