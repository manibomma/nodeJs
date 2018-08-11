function wishMe(str, postWishMsg) {
    postWishMsg(`Hey ${str}, welcome onboard.`)
}

wishMe("Raman", (wish) => {
    console.log(wish)
})
console.log('Wish accomplished')