// Enough is enough!
// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
// He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

// Task
// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.

function deleteNth(arr,n){
    // I can probably use the filter method here. if element in array appears n amount of times, remove it
    
  //   I can first declare an object that will hold the number then the number of times it's been used
    let obj = {}
    
  //   then use the filter method. if there is an existing key value, add one to it. if not, create a key value and assign it 1
    
    return arr.filter(element => {
      if (obj[element]) {
        obj[element]++
      } else {
        obj[element] = 1
      }
  //     return values that have a key value less than or equal to n
      return obj[element] <= n
    })
  }
  
  // P: will be two parameters. one will be an array of integers, the other will be a number
  // R: an array representing numbers that contain each number of original array if they occur at most n times
  // [20,37,20,21], 1),  => [20,37,21]