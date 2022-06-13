// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

function well(x){
  
    //   I can utilize a for loop here. If the loop detects a good idea, push to a variable called good ideas
    
    
      let goodSum = 0
      for (let i = 0; i < x.length; i++) {
        if (x[i] === 'good') {
          goodSum++
        }
      }
      //   After getting the amt of good ideas, I can use a simple condiitonal and return it to return the right string
      if (goodSum > 2) {
        return 'I smell a series!'
      } else if (goodSum > 0) {
        return 'Publish!'
      } else
        return 'Fail!'
    }
    
    // P: Will be an array of strings
    // R: Return fail or publish or i smell a series, depending on if the array contains 1 or 2 good, return publish. if more than 2
    // , return smell a series. if less than 1 good idea fail - string
    // E: [good,good,bad] => Publish