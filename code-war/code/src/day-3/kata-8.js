function DNAStrand(dna) {
    //your code here
    // let maps = [
    //     ['A', 'T'],
    //     ['C', 'G']
    // ];
    // let arr = []
    // dna.split('').map(item => {
    //     maps.forEach(map => {
    //         if (map.includes(item)) {
    //             arr.push(map.find(i => i != item))
    //         }
    //     })

    // })
    // return arr.join('')
    let map = {
        A: 'T',
        T: 'A',
        C: 'G',
        G: 'C'
    }
    return dna.split('').map(item => map[item]).join('')
}
console.log(DNAStrand("AGCA"))