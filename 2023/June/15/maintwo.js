// 2. Add Two Numbers

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {

    // Create a dummy node to serve as the head of the resulting linked list
     let dummy = new ListNode();
     let prev = dummy; // Maintain a reference to the previous node
 
     let carry = 0; // Initialize carry to 0
 
     // Iterate over the linked lists or until there is a carry value
     while (l1 || l2 || carry) {
         // Get the values of the current digits, or 0 if one of the linked lists has ended
         let v1 = l1 ? l1.val : 0;
         let v2 = l2 ? l2.val : 0;
 
         // Calculate the sum of the current digits and the carry value
         let val = v1 + v2 + carry;
 
         // Update the carry for the next iteration
         carry = Math.floor(val / 10);
 
         // Get the remainder to be the new value of the current node
         val = val % 10;
 
         // Create a new node with the calculated value and link it to the previous node
         prev.next = new ListNode(val);
 
         // Move the pointers to the next nodes
         prev = prev.next;
 
         // Move to the next nodes in the linked lists if they exist
         if (l1) {
             l1 = l1.next;
         }
         if (l2) {
             l2 = l2.next;
         }
     }
 
     return dummy.next; // Return the resulting linked list (head of the list excluding the dummy node)
 };
 
 
 //two non-empty linked list representing two non-negative integers. no funny business witht his parameter
 //Return a list representing the sum of two parameters reversed (array)
 // l1 = [2,4,3], l2 = [5,6,4]
 // output here would be [7,0.8] because 342 + 464 = 807, reversed is [7,0,8]