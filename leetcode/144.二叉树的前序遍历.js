/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function(root) {
   if(root == null)return [];
   let res = [];
   function traverse(root){
     res.push(root.val)
     root.left && traverse(root.left)
     root.right && traverse(root.right)
   }
   traverse(root);
   return res;
};

// @lc code=end

// 递归一行代码
var preorderTraversal = function(root) {
  return root ? [root.val].concat(preorderTraversal(root.left), preorderTraversal(root.right)) : [];
};

// 非递归，深度遍历
var preorderTraversal = function(root) {
  if(root == null)return [];
  let stack = [], res = [];
  stack.push(root);
  while(stack.length){
    let node = stack.pop();
    res.push(node.val)
    node.right && stack.push(node.right);
    node.left && stack.push(node.left);
  }
  return res;
};
