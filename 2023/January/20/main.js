// You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

// The ith item is said to match the rule if one of the following is true:

// ruleKey == "type" and ruleValue == typei.
// ruleKey == "color" and ruleValue == colori.
// ruleKey == "name" and ruleValue == namei.
// Return the number of items that match the given rule.

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
 var countMatches = function(items, ruleKey, ruleValue) {
    //declare a count to return at end
    let count = 0;

    //create rulekey object with index values
    let ruleKeyObj = {
        "type":0,
        "color":1,
        "name":2
    }

    //for loop

    for (let i= 0; i < items.length; i++) {
        let arr = items[i]
    //if string at index[rulekey] == ruleValue, add to count
        if (arr[ruleKeyObj[ruleKey]] === ruleValue) {
            count++
        }
    }
    return count
};

//Will be 3 params. first one will be an array of items, which is an array of arrays. array will always be valid and have nested arrays. nested arrays will always have strings of lowercase letters. other 2 params will always be strings

//Return a count representing the number of items that match the given rule with the last 2 params

//Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
// Output: 1
// Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].

