// return masked string
function maskify(cc) {
    return cc.split('').map((item, i, arr) => {
        if (i < (arr.length - 4)) {
            return '#'



        }
        return item
    }).join('')
}
console.log(maskify('4556364607935616'))