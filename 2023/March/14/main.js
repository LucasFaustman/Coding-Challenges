// 278. First Bad Version
// Easy
// 7.2K
// 2.8K
// Companies
// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        //binary search
        let low = 1;
        let high = n;
    //while low < high
        while (low < high) {
            //get our mid point
            let mid = low + Math.floor((high - low) / 2);
            //if our midpoint is BAD
            if (isBadVersion(mid)) {
                //then assign our high to our mid point so we can search the left side
                high = mid;
                //if the middlepoint is good, start to search the right side instead
            } else {
                low = mid + 1;
            }
        }
        return low;
    };
};


//technically given 2 params. one will be n, which represents versions. n will always be a positive integer
//second param is calling an api which return a boolean true or false, representing whether the specific version is bad or not

//Return the version that is the first bad one

//Input: n = 5, bad = 4
// Output: 4
// Explanation:
// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true
// Then 4 is the first bad version.