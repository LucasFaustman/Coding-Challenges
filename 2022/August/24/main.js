// Introduction
// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

// Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.

function alphabetWar(fight)
{
   //probably 2 for loops here with seperate conditionals
  
  //first declare a left and right variable
  let rightSum = 0
  let leftSum = 0
  
  //then for loop for left side
  for (let i = 0; i < fight.length; i++) {
    if (fight[i] === 'w') {
      leftSum += 4
    } else if (fight[i] === 'p') {
      leftSum += 3
    } else if (fight[i] === 'b') {
      leftSum += 2
    } else if (fight[i] === 's') {
      leftSum += 1
    }
  }
  //for loop for right side
  
  for (let i = 0; i < fight.length; i++) {
    if (fight[i] === 'm') {
      rightSum += 4
    } else if (fight[i] === 'q') {
      rightSum += 3
    } else if (fight[i] === 'd') {
      rightSum += 2
    } else if (fight[i] === 'z') {
      rightSum += 1
    }
  }
  
  //if left is bigger than right, return 'left side wins!', vice versa in ternary
  
  return leftSum > rightSum ? 'Left side wins!' : leftSum === rightSum ? "Let's fight again!" : 'Right side wins!'
  
}

//P: will be a string. seems like it will always be a string
//R: return a string representing which side won. parameters and powers assigned to letters is in problem.
// E: [a,c,w,z] => 'left side wins!' because a = 4 for left, z = 1 for right