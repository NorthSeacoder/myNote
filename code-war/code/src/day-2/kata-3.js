const reverseSeq = n => {
    // let arr = []
    // if (n > 0) {
    //     for (let i = n; i > 0; i--) {
    //         arr.push(i)
    //     }
    // }
    // return arr;
    return Array.from({
        length: n
    }, (_, i) => n - i);
};
console.log(reverseSeq(5))