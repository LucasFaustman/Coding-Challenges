// Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

// Do not modify the linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    //edge case. if no cycle, return null
    if (!head || !head.next) {
        return null;
    }
    //define a fast, slow, and pointer to head
    let fast = head;
    let slow = head;
    let pointer = head;
    //first while loop. fast = fast.next.next, and slow = slow.next
    //if (fast is equal to slow, break)
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) {
            break;
        }
    }
    //if fast does not equal slow, return null. this signifies no cycle.
    if (fast !== slow) {
        return null;
    }
    //second while loop. while pointer does not equal slow
    //increment pointer and slow
    while (pointer !== slow) {
        pointer = pointer.next;
        slow = slow.next;
    }
//return slow
    return slow;
};

//Will be a linkedin list. Number of nodes in list is from 0 to 10 to the 4

//Return the node where the cycle begins. if no cycle, return null;

//There is a cycle in a linkedin list if there is some node in the list that can be reachable by contioniously following the next pointer