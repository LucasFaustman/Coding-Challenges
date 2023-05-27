// 11. Container With Most Water

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Constraints:

// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104\

/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    //left and right pointer, and res
    let left = 0;
    let right = height.length - 1;
    let res = 0;
    //while left < right
    while (left < right) {
        //get the smallest point since container is limited by smallest point
        let smallestPoint = Math.min(height[left], height[right])
    //calculate area or container of water by minusing right - left * smallest
        container = (right - left) * smallestPoint
    //reassign res if necessary
        res = Math.max(container,res)
            //if left point is less than right, left++ and vice versa
        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }

    return res;
};

//Will be an array of numbers representing heights in a graph.

//length n. there are n vertical lines drawn such that the endpoints of the ith line are i,0 and i,height[i]]

//return the two lines THAT  together with the x-axis form a container, such that the container contains the most water

//return the max amount of water a container can store

//Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.