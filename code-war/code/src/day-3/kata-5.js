function mxdiflg(a1, a2) {
    // your code
    if (a1.length == 0 || a2.length == 0) return -1
    a1.sort((a, b) => a.length - b.length)
    a2.sort((a, b) => a.length - b.length)
    return Math.max((a1[a1.length - 1].length - a2[0].length), (a2[a2.length - 1].length - a1[0].length))
}
var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
console.log(mxdiflg(s1, s2))