function writeCards(names, word){
    const arr = []
    for(const n of names){
        arr.push( `Thank you, ${n}, for the wonderful ${word} gift!`)
    }
    return arr
}

function countDown(num) {

    for (let i =num; i>=0; i--){
        console.log(i)
    }
}