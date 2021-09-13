/** @typedef ListNode
 * @property {undefined | number} val
 * @property {undefined | null | ListNode} next
 *  */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let middleNode = function (head) {
  let slow = head
  let fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  return slow
};