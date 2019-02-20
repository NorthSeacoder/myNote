/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (31.56%)
 * Total Accepted:    48.6K
 * Total Submissions: 153.8K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length == 0) return ''
    let res = [];
    let test = strs[0].split('');
    // test.forEach((t, k) => {
    for (let k = 0; k < test.length; k++) {
        let thisTest = true;
        strs.forEach((item, i) => {
            if (i > 0) {
                if (!item.startsWith(test[k], k)) {
                    thisTest = false
                }

            }
        })
        if (thisTest) {
            res.push(test[k])
        } else {
            break
        }
    }
    // })
    return res.length > 0 ? res.join('') : ''
};
console.log(longestCommonPrefix(['acb', 'bca']))