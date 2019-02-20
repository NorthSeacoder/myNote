/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 *
 * https://leetcode-cn.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (55.90%)
 * Total Accepted:    67.6K
 * Total Submissions: 120.8K
 * Testcase Example:  '121'
 *
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 
 * 示例 1:
 * 
 * 输入: 121
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: -121
 * 输出: false
 * 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 * 
 * 
 * 示例 3:
 * 
 * 输入: 10
 * 输出: false
 * 解释: 从右向左读, 为 01 。因此它不是一个回文数。
 * 
 * 
 * 进阶:
 * 
 * 你能不将整数转为字符串来解决这个问题吗？
 * 
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    // let result = 0;
    // if (x < 0) return false;
    // let _x = x
    // while (_x > 0) {
    //     result = result * 10 + _x % 10;
    //     _x = Number.parseInt(_x / 10)
    // }
    // return result == x

    //反转一半
    if (x < 0 || (x % 10 == 0 && x != 0)) return false
    let res = 0;
    /**
     * 一旦x不大于res时，反转完毕
     */
    while (x > res) {
        res = res * 10 + x % 10;
        x = Number.parseInt(x / 10)
    }
    console.log(res, x)
    return x == res || x == Number.parseInt(res / 10)
};
// console.log(isPalindrome(12321))