/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
    //quadratic solution
    // //declare a count
    // let count = 0;

    // //for loop. nested for loop here
    // for (let i= 0; i < nums.length; i++) {
    //     for (let j = 0; j < nums.length; j++) {
    //         if ((nums[i] - 1) * (nums[j] - 1) > count && i !== j) {
    //             count = (nums[i] - 1) * (nums[j] - 1)
    //         }
    //     }
    // }
    // return count

    //declare array of 2 elements with 0's
    let [first, second] = [0, 0];
    //for of loop
    for( const number of nums){
        //if our number in loop > first, assign number to be first element in array, reassign first to be second element of array
        if( number > first ){
            [first, second] = [number, first];
            //if number is not greater than first, but greater than second, assign second to be our number
        }else if( number > second ){
            second = number;
        }
    } 
    //at very end, return first - 1 * second - 1
    
    return ( first - 1 ) * ( second - 1 );
};


//Will be an array of integers. will always be an array of integers. will always be positive ints
//Return a number representing the maxiumum value of nums[i] - 1 * nums[j] - 1

//E: Input: nums = [3,4,5,2]
// Output: 12 
// Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12. 