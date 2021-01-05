/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  let count = 0;
  for (let p = head; p != null; p = p.next) {
    if (p == null && count < k) return head;
    count++;
  }

  let p = dummyHead = new ListNode();
  dummyHead.next = head;
  let loopCount = Math.floor(count / k)

  for (let i = 0; i < loopCount; i++) {
    pre = null, cur = p.next
    for (let j = 0; j < k; j++) {
      let next = cur.next
      cur.next = pre
      pre = cur
      cur = next
    }

    let start = p.next
    p.next = pre
    start.next = cur
    p = start
  }
  return dummyHead.next
};
// @lc code=end
//递归
var reverseKGroup = function(head, k) {
  let pre = null, cur = head
  let p = head
  for (let i = 0; i < k; i++) {
      if (p == null) return head
      p = p.next
  }
  for (let i = 0; i < k; i++) {
      let next = cur.next
      cur.next = pre
      pre = cur
      cur = next
  }
  head.next = reverseKGroup(cur, k)
  return pre
};
