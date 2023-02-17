// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

// For example, the following two linked lists begin to intersect at node c1:


// The test cases are generated such that there are no cycles anywhere in the entire linked structure.

// Note that the linked lists must retain their original structure after the function returns.

// Custom Judge:

// The inputs to the judge are given as follows (your program is not given these inputs):

// intersectVal - The value of the node where the intersection occurs. This is 0 if there is no intersected node.
// listA - The first linked list.
// listB - The second linked list.
// skipA - The number of nodes to skip ahead in listA (starting from the head) to get to the intersected node.
// skipB - The number of nodes to skip ahead in listB (starting from the head) to get to the intersected node.
// The judge will then create the linked structure based on these inputs and pass the two heads, headA and headB to your program. If you correctly return the intersected node, then your solution will be accepted.



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    //if heada or b is null, return null
    if (!headB || !headA) {
        return null;
    }
    let pointA = headA;
    let pointB = headB;

    while (pointA !== pointB) {
        if (pointA === null) {
            pointA = headB;
        } else {
            pointA = pointA.next;
        }
        if (pointB === null) {
            pointB = headA;
        } else {
            pointB = pointB.next;
        }
    }
    return pointA;
}
//2 linked lists.

//Return the node at which the two lists intersect. iff linked lists have no intersection, return null

// //Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
// Output: Intersected at '8'