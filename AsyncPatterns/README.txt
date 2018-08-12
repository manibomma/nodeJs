* NodeJs is Asynchronous

* Callback Pattern : block of instructions wrapped in a function to be called when an asynchronous call has completed
    - Call back sample :
      function delay(seconds, callback) {
          setTimeOut(callback, seconds * 1000)
      }

      delay(2, () => {
          console.log('wait ended')
      })

* Functions return values by 2 types :
    1. direct style i.e., using 'return' statement
    2. CPS - continuation passing style, here there is no need to use a return statement

* process.nextTick() - this tells nodeJs to invole the function that we send to nextTick() on the next loop

* Nested call backs also called "Callback hell / pyramid of doom"

* Promise : Its an object used to represent eventual completion of asynchronous operations
    - The idea behind a promise is that we can wait for an asynchronous operration to complete and then we can resolve the promise
      e.g:
        var delay = (seconds) => new Promise((resolves, rejects) => {
            setTimeOut(() => {
                resolves('Wait ended')
            }, seconds * 1000)
        })

        delay(2)
            .then((msg)=>{console.log(msg)})

    The above on execution, waits for 2 seconds and displays the message passed by resolves.

    - We can pass values using 'then' chain :
        delay(2)
            .then((msg) => {console.log(msg)})
            .then(() => 10)
            .then((num) => {console.log(`Number passed by then is : ${num}`)})

    - UnhandledPromiseRejectionWarning - occurs when an error occurs in the promise where it is not handled by the caller

    