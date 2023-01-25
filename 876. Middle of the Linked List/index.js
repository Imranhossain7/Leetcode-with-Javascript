/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let mover = head;
  let middle = head;

  while (mover && mover.next) {
    mover = mover.next.next;
    middle = middle.next;
  }
  return middle;
};
