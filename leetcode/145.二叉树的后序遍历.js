/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 非递归 循环
var postorderTraversal = function(root) {
    if(root == null) return []
    let stack = [], res = []
    stack.push(root)
    while(stack.length){
      let node = stack.pop()
      res.unshift(node.val)
      node.left && stack.push(node.left);
      node.right && stack.push(node.right);
    }
    return res
};
// @lc code=end

// 递归
var postorderTraversal = function(root) {
  let res = []
  function traverse(root){
    if(root == null) return
    traverse(root.left)
    traverse(root.right)
    res.push(root.val)
  }
  traverse(root)
  return res
};