/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let count = 0;
    const cols = new Array(n);
    const leftTop = new Array(n << 1 - 1);
    const rightTop = new Array(leftTop.length);

    const dfs = (row) => {
      if (row === n) {
        return ++count
      }
      for (let col = 0; col < n; col++) {
        if (cols[col]) continue;
        let ltIndex = row - col + n - 1;
        if (leftTop[ltIndex]) continue;
        let rtIndex = row + col;
        if (rightTop[rtIndex]) continue;

        cols[col] = true;
        leftTop[ltIndex] = true;
        rightTop[rtIndex] = true;
        dfs(row + 1)
        cols[col] = false;
        leftTop[ltIndex] = false;
        rightTop[rtIndex] = false;
      }
    }
    dfs(0)
    return count;
};
// @lc code=end

