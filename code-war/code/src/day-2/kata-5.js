function order(words) {
    // ...
    // if (words === '') {
    //     return ''
    // }
    // let wordsArr = words.split(" ");
    // let res = [];
    // wordsArr.forEach(item => {
    //     let reg = /[^1-9]/ig;
    //     let index = Number.parseInt(item.replace(reg, ''))
    //     res[index - 1] = item;
    // })
    // return res.join(' ')
    return words.split(' ').sort(function (a, b) {
        console.log(a.match(/\d/), b.match(/\d/))
        return a.match(/\d/) - b.match(/\d/);
    }).join(' ');
}
console.log(order('is2 Thi1s T4est 3a'))