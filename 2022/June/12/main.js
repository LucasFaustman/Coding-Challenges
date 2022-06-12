// Inspired by the development team at Vooza, write the function that

// accepts the name of a programmer, and
// returns the number of lightsabers owned by that person.
// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

// Note: your function should have a default parameter.


function howManyLightsabersDoYouOwn(name) {
    //   I can use a simple ternary here to see if name is equal to zach or not
      
      return name === 'Zach' ? 18 : 0
    }
    
    // P: will be a string containing a name. Won't always be a string
    // R: return 18 if string is equal to zach, zero if not.
    // E: 'Zach' => 18  'Lucas' => 0