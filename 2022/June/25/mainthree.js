// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable (seconds) {
    //   I can maybe first declare variables which represent hours,minutes,seconds
    
    //   for hours, hours can represents seconds/3600
      let hours = Math.floor(seconds / 3600)
    //   minutes can represent seconds - hours/3600 / 60. getting hours out of the way which leaves us just minutes
      let minutes = Math.floor(seconds % 3600 / 60)
    //   then finally, for seconds, delete hours and seconds from it
      let newSeconds = Math.floor(seconds % 3600 % 60)
    //   then, if hours minutes or seconds is lower than 10, add a 0 to the beginning
      
      if (hours < 10) {
          hours = '0' + hours
      } if (minutes < 10) {
        minutes = '0' + minutes
      } if (newSeconds < 10) {
        newSeconds = '0' + newSeconds
      }
  //     then return the string using a template literal
      
      return `${hours}:${minutes}:${newSeconds}`
    }
  
  // P: a number which represents seconds
  // R: returning a template literal of seconds in hours, minutes, and seconds
  // E: 50 => '0:0:50'