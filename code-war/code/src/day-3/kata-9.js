function XO(str) {
    //code here
    let _str = str.toLowerCase();
    let xs = _str.split('').filter(item => item == 'x');
    let os = _str.split('').filter(item => item == 'o');
    return xs.length == os.length
}
console.log(XO('Xo'))