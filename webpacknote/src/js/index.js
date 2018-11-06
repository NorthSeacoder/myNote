const time = new Date()
const string = `Hello World ${time.toDateString()}`
console.log(string);
document.getElementById('p').innerHTML(string);