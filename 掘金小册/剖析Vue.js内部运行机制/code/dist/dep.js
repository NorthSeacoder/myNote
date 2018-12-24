"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @description 订阅者 Dep,主要作用是用来存放 Watcher 观察者对象。
 * 
 * @export
 * @class Dep
 */
var Dep = function () {
    function Dep() {
        _classCallCheck(this, Dep);

        /* 用来存放Watcher对象的数组 */
        this.subs = [];
    }

    /* 在subs中添加一个Watcher对象 */


    _createClass(Dep, [{
        key: "addSub",
        value: function addSub(sub) {
            this.subs.push(sub);
        }

        /* 通知所有Watcher对象更新视图 */

    }, {
        key: "notify",
        value: function notify() {
            this.subs.forEach(function (sub) {
                sub.update();
            });
        }
    }]);

    return Dep;
}();

exports.default = Dep;