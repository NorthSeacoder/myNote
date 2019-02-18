function array_diff(a, b) {
    let _a = Array.from(new Set(a));
    return _a.filter(n => !b.includes(n))
}
console.log(array_diff([19, 19, -2, 8, 17, -8, 17, 20, -5], [19]))