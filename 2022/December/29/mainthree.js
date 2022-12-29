// You are given two 2D integer arrays, items1 and items2, representing two sets of items. Each array items has the following properties:

// items[i] = [valuei, weighti] where valuei represents the value and weighti represents the weight of the ith item.
// The value of each item in items is unique.
// Return a 2D integer array ret where ret[i] = [valuei, weighti], with weighti being the sum of weights of all items with value valuei.

// Note: ret should be returned in ascending order by value.

/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
 var mergeSimilarItems = function(items1, items2) {
    //hash
    //for loop and add key value pairs from items1 to hash
    //loop through items2, if a match in value, add weight to hash. if no match, create new
    //return, sort, using an object method to make an array
    
    let hash = {}

    for (let i = 0; i < items1.length; i++) {
        hash[items1[i][0]] = items1[i][1]
    }

    for (let i= 0; i < items2.length; i++) {
      hash[items2[i][0]] ?  hash[items2[i][0]] += items2[i][1] : hash[items2[i][0]] = items2[i][1]
    }

    return Object.entries(hash)
};

//Will be 2 2d arrays. in each nested array, 2 values, both numbers. first number represents value, second represents weight. always will be positive numbers and unique in first items
//Return a new array where we have each value, but weight is the sum of weights of all items with the valuei. sorted in ascending order by value
//[[1,1],[4,5],[3,8]], items2 = [[3,1],[1,5]] => [[1,6],[3,9],[4,5]]