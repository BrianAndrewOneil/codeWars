//Given the head of a linked list, return the middle node of the linked list.
//If there are two middle nodes, return the second middle node.
//https://leetcode.com/problems/middle-of-the-linked-list

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
var middleNode = function(head) {
    slow=fast=head;
    while (fast && fast.next){
        slow=slow.next
        fast=fast.next.next
    }
    return slow
};