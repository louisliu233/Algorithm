/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let dummyHead = new ListNode();
    dummyHead.next = head;
    let fast = slow = dummyHead
    if (fast.next == null || fast.next.next == null) return false;
    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
      if (fast == slow) return true
    }
    return false
};
// @lc code=end
//O(n)内存
var hasCycle = function(head) {
  let set = new Set();
  let p = head
  while (p) {
    if (set.has(p)) return true;
    set.add(p);
    p = p.next;
  }
  return false;
};
