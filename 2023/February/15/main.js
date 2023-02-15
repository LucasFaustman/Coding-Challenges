// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

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
 var deleteDuplicates = function(head) {
    //initialize pointer curr with head node
    let current = head;
    //traverse all elements when our current and current.next is truthy
    while (current && current.next) {
        //if our current val is equal to our next val
        if (current.val === current.next.val) {
            //reassign our next val to the next next val
            current.next = current.next.next;
            //if not, increment current pointer
        } else {
            current = current.next;
        }
    }
    //return manipulated linked list
    return head;
};

//WIll be the head of a linked list

//Return a linked list with all duplicates. deleted, such that each element only shows up once

//E: [1,2,2,3] => [1,2,3]