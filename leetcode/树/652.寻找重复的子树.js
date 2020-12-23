/*
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    const treeMap = new Map
    const result = []
    function traverse(root) {
      if(!root){
        return '#'
      }
      const left = traverse(root.left)
      const right = traverse(root.right)
      const subtrees =`${left},${right},${root.val}`
      const count = treeMap.get(subtrees) || 0
      if(count === 1){
        result.push(root)
      }
      treeMap.set(subtrees, count + 1)
      return subtrees
    }
    traverse(root)
    return result
};
// @lc code=end

