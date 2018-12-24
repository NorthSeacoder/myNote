'use strict';

var _Vue = require('./Vue');

var _Vue2 = _interopRequireDefault(_Vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var o = new _Vue2.default({
    data: {
        test: "I am test."
    }
});
o._data.aaa = 'hehe';
o._data.test = 'hehe';

console.log(o._data);