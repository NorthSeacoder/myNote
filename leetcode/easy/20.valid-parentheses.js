/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (36.13%)
 * Total Accepted:    44.2K
 * Total Submissions: 122.1K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 
 * 
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 
 * 
 * 注意空字符串可被认为是有效字符串。
 * 
 * 示例 1:
 * 
 * 输入: "()"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "()[]{}"
 * 输出: true
 * 
 * 
 * 示例 3:
 * 
 * 输入: "(]"
 * 输出: false
 * 
 * 
 * 示例 4:
 * 
 * 输入: "([)]"
 * 输出: false
 * 
 * 
 * 示例 5:
 * 
 * 输入: "{[]}"
 * 输出: true
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let config = ['{', '[', '('];
    let map = new Map();
    map.set('{', '}').set('[', ']').set('(', ')')
    let res = true
    let arr = []
    for (let i = 0; i < s.split('').length; i++) {
        if (s.split('').length % 2 != 0) return false
        let item = s.split('')[i];
        // console.log(item)
        if (config.includes(item)) {
            arr.push(item)
        } else {
            // console.log(map.get(arr.pop()), item)
            if (map.get(arr.pop()) != item) {
                res = false;
                break
            }
        }
    }
    if (arr.length > 0) return false
    return res
};
console.log(isValid("(("))