/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let r = 0, i = g.length - 1, j = s.length
    g.sort((a, b) => b - a)
    s.sort((a, b) => b - a)
    while(j--) {
        if (s[j] >= g[i]) {
          r++
          if (i-- === 0) break
        }
    }
    return r
};
// @lc code=end

//
var findContentChildren = function(g, s) {
  let r = 0, i = g.length, j = s.length
  g.sort((a, b) => b - a)
  s.sort((a, b) => b - a)
  while(i--) {
    if (j === -1)break
    while(j--) {
      if (s[j] >= g[i]) {
        r++
        break
      }
    }
  }
  return r
};

// 优化空间 孩子指针移动的距离=得到饼干的孩子数量
var findContentChildren = function(g, s) {
  let i = g.length, j = s.length

  g.sort((a, b) => b - a)
  s.sort((a, b) => b - a)

  while(j--) {
    if (s[j] >= g[i]) {
      if (i-- === 0) break
    }
  }
  return g.length - i - 1
};

