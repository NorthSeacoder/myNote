//计算范围内数字和
function GetSum(a, b) {
    //Good luck!
    //倒叙
    let arr = [a, b].sort();
    let sum = arr[0]
    while (arr[0] != arr[1]) {
        arr[0]++;
        sum += arr[0]
    }

    return sum
}


console.log(GetSum(2, 1))