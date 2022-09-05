// Finish the uefaEuro2016() function so it return string just like in the examples below:

// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

function uefaEuro2016(teams, scores){
    // 3 conditionals for each score
    
    if (scores[0] > scores[1]) {
      return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
    } else if (scores[0] === scores[1]) {
      return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
    } else
       return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
    
    
  }
  
  //P:two parameters. one will be an array of 2 strings, other will be an array of integers representing scores
  // R: return a string outlined in the original problem
  // E: ['Germany','Ukraine'], [2,0] => 'At match Germany - Ukraine, Germany won!'