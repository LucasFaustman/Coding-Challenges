// 1507. Reformat Date
// Given a date string in the form Day Month Year, where:

// Day is in the set {"1st", "2nd", "3rd", "4th", ..., "30th", "31st"}.
// Month is in the set {"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"}.
// Year is in the range [1900, 2100].
// Convert the date string to the format YYYY-MM-DD, where:

// YYYY denotes the 4 digit year.
// MM denotes the 2 digit month.
// DD denotes the 2 digit day.
/**
 * @param {string} date
 * @return {string}
 */
 var reformatDate = function(date) {

    //month object
    const months = {
  Jan: '01',
  Feb: '02',
  Mar: '03',
  Apr: '04',
  May: '05',
  Jun: '06',
  Jul: '07',
  Aug: '08',
  Sep: '09',
  Oct: '10',
  Nov: '11',
  Dec: '12',
}

    //split the string first
    let splittedDate = date.split(' ')
    //get year by just getting second index
    let year = splittedDate[2]
    //get month by retrieving from our months obj
    let month = months[splittedDate[1]]
    //get our day from index 0
    let day = splittedDate[0]
    //parse our int - if less than 10, add 0 to beginning, else just parse int
    day = parseInt(day) < 10 ? `0${parseInt(day)}` : parseInt(day)

    return `${year}-${month}-${day}`
    
};

//Will be a date in a string form. Dates are guaranteed to be valid, no error handling necessary. will be in style such as 6th Jun 1933

//Return a new string in a different format, to YYYY-MM-DD

//Input: date = "20th Oct 2052"
// Output: "2052-10-20"