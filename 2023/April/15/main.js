// 1450. Number of Students Doing Homework at a Given Time
// Given two integer arrays startTime and endTime and given an integer queryTime.

// The ith student started doing their homework at the time startTime[i] and finished it at time endTime[i].

// Return the number of students doing their homework at time queryTime. More formally, return the number of students where queryTime lays in the interval [startTime[i], endTime[i]] inclusive.

// Constraints:

// startTime.length == endTime.length
// 1 <= startTime.length <= 100
// 1 <= startTime[i] <= endTime[i] <= 1000
// 1 <= queryTime <= 1000

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
 var busyStudent = function(startTime, endTime, queryTime) {

    //declare variable to hold studentcount
        let studentCount = 0;
        //for loop through starttime
    
        for (let i= 0; i < startTime.length; i++) {
            //if startTime < querytime and endtime > querytime, count++
            if (startTime[i] <= queryTime && endTime[i] >= queryTime) {
                studentCount++
            }
        }
        return studentCount;
    };
    
    //Will be 3 params. 2 will be integer arrays and last will be an integer. always will be 2 valid arrays with positive integer. last param will be a pos integer
    
    //Return the number of students doing their homework at time querytime. 
    
    //formally, return number of students where querytime lays in the interval starttime[i] and endtime[i]
    
    //Input: startTime = [1,2,3], endTime = [3,2,7], queryTime = 4
    // Output: 1
    // Explanation: We have 3 students where:
    // The first student started doing homework at time 1 and finished at time 3 and wasn't doing anything at time 4.
    // The second student started doing homework at time 2 and finished at time 2 and also wasn't doing anything at time 4.
    // The third student started doing homework at time 3 and finished at time 7 and was the only student doing homework at time 4.