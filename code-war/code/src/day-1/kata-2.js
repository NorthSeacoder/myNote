/**Consider an array of sheep where some sheep 
 * may be missing from their place. We need a function 
 * that counts the number of sheep present in the array (true means present).
 */
function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    // arrayOfSheep.filter(item=>{
    // })
    // let i = 0;
    // arrayOfSheep.forEach(item => {
    //     if (item) {
    //         i++
    //     }
    // })
    // return i
    return arrayOfSheep.filter(Boolean).length;
}
console.log(countSheeps([true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true
]))