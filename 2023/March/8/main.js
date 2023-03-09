// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {

    let dummy = new ListNode(-Infinity)
    let prev = dummy;
    
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            prev.next = list1;
            prev = list1;
            list1 = prev.next;
        } else {
            prev.next = list2;
            prev = list2;
            list2 = prev.next;
        }
    }
    
    
    if (!list1) prev.next = list2;
    if (!list2) prev.next = list1;
    
    return dummy.next;
    }
    
    //2 parameters. both will be array of numbers from 0-50. will never be strings or synbols. always valid. might be negative numbs
    //Return a single array representing the two arrays merged and sorted together in ascending order. if empty, return empty arrays
    // //Input: list1 = [1,2,4], list2 = [1,3,4]
    // Output: [1,1,2,3,4,4]
    //[0],[] => [0]
    //[],[] => []