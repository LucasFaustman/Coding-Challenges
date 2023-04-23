// 203. Remove Linked List Elements
// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

// Constraints:

// The number of nodes in the list is in the range [0, 104].
// 1 <= Node.val <= 50
// 0 <= val <= 50

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
    //a simple while loop works I think
    // Check if head is null
    if (head === null) {
        return null;
    }
    
	// if head is the value were deleting and if there is any repetition lets handle that case first otherwise we'll just break out of the loop
    while (head !== null && head.val === val) {
        head = head.next;
    }

    let pointer = head;

// skip any nodes whos values match the parameters and set it to the node after
	// if the node is found, set curr.next to the node after it then try again
	// otherwise iterate forward
    while (pointer && pointer.next) {
        if (pointer.next.val === val) {
            pointer.next = pointer.next.next;
        } else {
            pointer = pointer.next;
        }
    }
    return head;
};

//Will be the head of a linked list. always will be valud linked list. second param will be a value between 0 and 50

//Return a new head of a linkedlist with all nodes with the value of our second param removed

//E:
//Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]