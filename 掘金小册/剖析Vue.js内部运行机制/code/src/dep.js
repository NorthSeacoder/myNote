/**
 * @description 订阅者 Dep,主要作用是用来存放 Watcher 观察者对象。
 * 
 * @export
 * @class Dep
 */
export default class Dep {
    constructor() {
        /* 用来存放Watcher对象的数组 */
        this.subs = [];
    }

    /* 在subs中添加一个Watcher对象 */
    addSub(sub) {
        this.subs.push(sub);
    }

    /* 通知所有Watcher对象更新视图 */
    notify() {
        this.subs.forEach((sub) => {
            sub.update();
        })
    }
}