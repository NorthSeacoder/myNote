"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dep = require("./dep");

var _dep2 = _interopRequireDefault(_dep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Watcher = function () {
    function Watcher() {
        _classCallCheck(this, Watcher);

        /* 在new一个Watcher对象时将该对象赋值给Dep.target，在get中会用到 */
        _dep2.default.target = this;
    }

    /* 更新视图的方法 */


    _createClass(Watcher, [{
        key: "update",
        value: function update() {
            console.log("视图更新啦～");
        }
    }]);

    return Watcher;
}();

exports.default = Watcher;

_dep2.default.target = null;