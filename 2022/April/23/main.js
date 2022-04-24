// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    // split string into array
    let sortedNums = s.split(' ').sort((a,b) => a.length - b.length)

    // find item with smallest length and return
    return sortedNums[0].length

}