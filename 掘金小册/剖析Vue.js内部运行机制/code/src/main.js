import Vue from './Vue';
let o = new Vue({
    data: {
        test: "I am test."
    }
});
o._data.aaa = 'hehe'
o._data.test = 'hehe'

console.log(o._data)