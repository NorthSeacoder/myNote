function factorial(n) {
    // Calculate the factorial here
    if (n < 0 || n > 12) {
        throw new RangeError('Parameter must be between ' + 0 + ' and ' + 12)
    } else {
        let res = 1;
        for (let i = n; i >= 1; i--) {
            res *= i
        }
        return res
    }
}
console.log(factorial(13))