function delayedWish(seconds, str, wishMsg) {
    setTimeout(() => {
        wishMsg(`Hey ${str}, Thanks for your co-operation.\nHow are you doing?`)
    }, seconds * 1000)
}

delayedWish(3, "Raman", (wish) => {
    console.log(wish)
})

console.log('There is a delay in wishing, please be patient')