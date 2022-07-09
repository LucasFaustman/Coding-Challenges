// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.

function warnTheSheep(queue) {

    //   first step will be to reverse the array. this will be easier to visualize since the numbers are backwards in paramater
    //   get the index of wolf
    //   return a conditional. if wolf is at index 0, then return the pls go away string. if not, return the index of wolf in string
      
      let queueReversed = queue.reverse()
      
      let sheepIndex = queueReversed.indexOf('wolf')
      
      return sheepIndex === 0 ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${sheepIndex}! You are about to be eaten by a wolf!`
      
    }
    
    // P: an array of strings.there will be at least one wolf in the array. this will always be an array
    // R: a string. if animal is closest to me, return a specific string. if not, return a string that tells the sheep at position x
    // to get out of the way
    // E:["sheep", "sheep", "sheep", "wolf", "sheep"] => 'Oi! sheep number 1, you are about to be eaten by a wolf'