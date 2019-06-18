function findSum(n) {
    let sum = 0
    while (n > 0) {
        if (n % 3 == 0 || n % 5 == 0) {
            sum += n;
        }
        n--
    }
    return sum
}
console.log(findSum(10))