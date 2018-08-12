function delayedWish(seconds, wishMsg) {
    setTimeout(wishMsg, seconds * 1000)
}

delayedWish(3, () => {
    console.log(`Hey, Thanks for your co-operation.\nHow are you doing ?`)
})

console.log('There is a delay in wishing, please be patient')