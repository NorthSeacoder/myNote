/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (31.34%)
 * Total Accepted:    78.7K
 * Total Submissions: 250.7K
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 
 * 示例 1:
 * 
 * 输入: 123
 * 输出: 321
 * 
 * 
 * 示例 2:
 * 
 * 输入: -123
 * 输出: -321
 * 
 * 
 * 示例 3:
 * 
 * 输入: 120
 * 输出: 21
 * 
 * 
 * 注意:
 * 
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    //let result = x > 0 ? Number.parseInt(String(x).split('').reverse().join('')) : -Number.parseInt(String(Math.abs(x)).split('').reverse().join(''));
    //模十法
    let result = 0;
    let AbsX = Math.abs(x);
    while (AbsX > 0) {
        result = result * 10 + AbsX % 10;
        AbsX = Number.parseInt(AbsX / 10)
    }
    result = x > 0 ? result : -result
    return result >= -Math.pow(2, 31) && result <= Math.pow(2, 31) - 1 ? result : 0;
};