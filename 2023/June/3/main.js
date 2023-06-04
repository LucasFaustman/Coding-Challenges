// 143. Reorder List
// You are given the head of a singly linked-list. The list can be represented as:

// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
 var reorderList = function(head) {

    // Find the middle of the list using the two-pointer technique
    let fast = head; // Fast pointer moves two steps at a time
    let slow = head; // Slow pointer moves one step at a time

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    // Reverse the second half of the linked list using the reverse linked list technique
    let prev = null; // Previous node for reversal
    let cur = slow.next; // Current node to be reversed

    while (cur) {
        let temp = cur.next; // Store the next node
        cur.next = prev; // Reverse the next pointer
        prev = cur; // Move the previous pointer
        cur = temp; // Move the current pointer
    }

    slow.next = null; // Break the link between the first and second halves

    // Combine the first and reversed second halves of the list
    let h1 = head; // Head of the first half
    let h2 = prev; // Head of the reversed second half

    while (h2) {
        let temp = h1.next; // Store the next node in the first half
        h1.next = h2; // Point the next pointer of the first half to the node in the second half
        h1 = h2; // Move the first half pointer
        h2 = temp; // Move the second half pointer
    }

};

//Will be a linked list. always valid. always in asc order

//Return a new linked list in the order...

//l0 => ln => l1 => ln-1... etc

