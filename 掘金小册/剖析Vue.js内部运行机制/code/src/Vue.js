import Dep from './dep';
import Watcher from './watcher';

function cb(val) {
    /* 渲染视图 */
    console.log("视图更新啦～");
}
/**
 * @description 
 * 
 * @param {any} obj 需要绑定的对象
 * @param {any} key obj的某一个属性
 * @param {any} val 具体的值
 */
function defineReactive(obj, key, val) {
    /* 一个Dep类对象 */
    const dep = new Dep();

    Object.defineProperty(obj, key, {
        enumerable: true,
        /* 属性可枚举 */
        configurable: true,
        /* 属性可被修改或删除 */
        get: function reactiveGetter() {
            /* 将Dep.target（即当前的Watcher对象存入dep的subs中） */
            dep.addSub(Dep.target);
            return val;
        },
        set: function reactiveSetter(newVal) {
            if (newVal === val) return;
            /* 在set的时候触发dep的notify来通知所有的Watcher对象更新视图 */
            dep.notify();
        }
    });
}

function observer(value) {
    if (!value || (typeof value !== 'object')) {
        return;
    }

    Object.keys(value).forEach((key) => {
        defineReactive(value, key, value[key]);
    });
}

export default class Vue {
    /* Vue构造类 */
    constructor(options) {
        this._data = options.data;
        observer(this._data);
        /* 新建一个Watcher观察者对象，这时候Dep.target会指向这个Watcher对象 */
        new Watcher();
        /* 在这里模拟render的过程，为了触发test属性的get函数 */
        console.log('render~', this._data.test);
    }
}