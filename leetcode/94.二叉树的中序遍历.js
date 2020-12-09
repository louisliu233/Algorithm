/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function(root) {
   if (root == null)return []
   let stack = [], res = []
   while(stack.length || root){
     while (root){
       stack.push(root)
       root = root.left
     }
     let node = stack.pop()
     res.push(node.val)
     root = node.right
   }
   return res
};
// @lc code=end

// 递归
var inorderTraversal = function(root) {
  let res = [];
  function traverse(root) {
    if (root == null) return
    traverse(root.left);
    res.push(root.val);
    traverse(root.right);
  }
  traverse(root)
  return res;
};