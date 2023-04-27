// 148. Sort List
// Given the head of a linked list, return the list after sorting it in ascending order.

// Constraints:

// The number of nodes in the list is in the range [0, 5 * 104].
// -105 <= Node.val <= 105

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
 var sortList = function(head) {
    //brute force
    let node = head; //helper node to iterate the linked list

    //create new arr, then add values of head, then sort
    let newArr = [];

    while (head) {
        newArr.push(head.val)
        head = head.next;
    }

    newArr = newArr.sort((a,b) => a - b)
    
    head = node;

    for (let n of newArr) {
        node.val = n; //Change list value
        node = node.next; //Go next
    }

    return head;
};


//Will be the head of a linked list. always valid

//Return a sorted version of the linked list but in ascending order

//E: 

// Input: head = [4,2,1,3]
// Output: [1,2,3,4]