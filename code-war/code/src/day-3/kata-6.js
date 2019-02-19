var findDigit = function (num, nth) {
    let length = Math.abs(num).toString().length
    if (nth > length) return 0;
    if (nth <= 0) return -1
    return Number.parseInt(Math.abs(num).toString().split('')[length - nth])
}
console.log(findDigit(-5673, 0))