// 141. Linked List Cycle

// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

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
    //fast and slow pointer
    let slow = head;
    let fast = head;
    //while we have a fast and fast.next
    while (fast && fast.next) {
        slow = slow.next; //iterate slow by 1
        fast = fast.next.next; //iterate fast by 2

        if (fast === slow) { //if our fast ends up meeting our slow, we have a match and can return true
            return true;
        }
    }
    //return false if fast does not ever meet slow
    return false;

};

//Will be a linked list

//Return boolean true if the linked list has a cycle inside of it. a cycle if when a node in a linked list can be reached more than once by using .next