// 19. Remove Nth Node From End of List

// Given the head of a linked list, remove the nth node from the end of the list and return its head.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    //brute force
    let node = head;
    let arr = [];

    while (head) {
        arr.push(head.val)
        head = head.next;
    }

    head = node;
    //get rid of nth node
    arr.splice(arr.length - n,1)
    //then turn back to a list

    let newHead = new ListNode();
    let newNode = newHead;
    for (let n of arr) {
        newNode.next = new ListNode(n);
        newNode = newNode.next;
    }

    return newHead.next;
};

//2 params. One will be the head of a linked list, other will be an integer representing the nth node from the end of the list. both params will always be valid

//Return the head of the linkedin list with the nth node from the end of the list removed


//Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]