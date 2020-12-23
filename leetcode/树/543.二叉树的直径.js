/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let res = 0;
    if(!root)return 0;
    function dfs(node) {
      if(!node)return 0;
      let left = dfs(node.left);
      let right = dfs(node.right);
      res = Math.max(left + right, res);
      return Math.max(left, right) + 1;
    }
    dfs(root);
    return res;
};
// @lc code=end

