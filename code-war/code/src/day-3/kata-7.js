function getCount(str) {
    return str.split('').filter(item => ['a', 'e', 'i', 'o', 'u'].includes(item)).length;
}
console.log(getCount("abracadabra"))