// Given the head of a singly linked list, reverse the list, and return the reversed list.


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
 var reverseList = function(head) {
    //initialize current and previous value
    //current value is head
    let current = head
    //prev is null because new tail will point to null
    let previous = null
    //while there is a current
    while(current) {
        //capture our old next, which is our new current
        let oldNext = current.next
        //set current next to the previous(the actual reversal)
        current.next = previous
        //point our previous to current
        previous = current
        //point our current to the oldnext
        current = oldNext
    }
    return previous
};