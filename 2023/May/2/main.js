// 234. Palindrome Linked List
// Given the head of a singly linked list, return true if it is a 
// palindrome
//  or false otherwise.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    //add values to an array then solve from there!
    let arr = [];

    while (head) {
        arr.push(head.val)
        head = head.next;
    }
    //solve for palindrome
    for (let i= 0; i < Math.floor(arr.length / 2); i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

//Will be a head of a linked list

//Return true if the linked list is a palindrome, false if not