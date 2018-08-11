function wishMe(str, postWishMsg) {
    process.nextTick(() => {
        postWishMsg(`Hey ${str}, welcome onboard.`)
    })
    
}

wishMe("Raman", (wish) => {
    console.log(wish)
})
console.log('Wish accomplished')