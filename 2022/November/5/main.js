// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Notes:

// Preserve the order of the original list.
// Return an empty array [] if there is no developer with an "odd" name.
// The input array and first names will always be valid and formatted as in the example above.


function findOddNames(list) {
    //I think I can filter, then map to each asc11 rep, then reduce, then check if a odd number or not
    
    let newArr = []
    
    for (let obj in list) {
      let splittedFirstName = list[obj].firstName.split('')
     let firstNameCalc = splittedFirstName.map(letter => letter.charCodeAt(0)).reduce((acc,num) => acc + num,0)
      if (firstNameCalc % 2 !== 0) {
        newArr.push(list[obj])
      }
    }
    return newArr
  }
  
  //Will be an array of objects. always will be valid. objects represent developers
  //Return only the objects where the ASC11 REPRESENTATION of all character in the first name will result in an odd number
  //var list1 = [
  //   { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
  //   { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
  // ]; =>
  
  // [
  //   { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
  // ]