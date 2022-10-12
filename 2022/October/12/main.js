// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an object which includes the count of food options selected by the developers on the meetup sign-up form..



// Notes:

// The order of the meals count in the object does not matter.
// The count value should be a valid number.
// The input array will always be valid and formatted as in the example above.
// there are 5 possible meal options and the strings representing the selected meal option will always be formatted in the same way, as follows: 'standard', 'vegetarian', 'vegan', 'diabetic', 'gluten-intolerant'.


function orderFood(list) {
  
    //map through our og list and only get meals
    let mealArray = list.map(obj => obj.meal)
    //declare new obj
    let newObj = {}
    
    //for loop
    for (let i = 0; i < mealArray.length; i++) {
      //check if property is inside obj. if so, add one to it
      if (newObj[mealArray[i]]) {
        newObj[mealArray[i]] += 1
        //if not, create new property
      } else
        newObj[mealArray[i]] = 1
    }
    //return obj
    return newObj
  }
  
  
  //Will be an array of objects. input will always be valid and always be an array of objects!
  //Return an object preresenting the count of food options selected by developers. order of meals dont matter. count will be valid.
  //always formatted by standard, vegatarian, vegan, diabetic, gluten intolerant
  //var list1 = [
  //   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
  //     meal: 'vegetarian' },
  //   { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
  //     meal: 'standard' },
  //   { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
  //     meal: 'vegan' },
  //   { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
  //     meal: 'vegetarian' },
  // ];
   // =>
  // { vegetarian: 2, standard: 1, vegan: 1 }