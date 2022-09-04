// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

function defineSuit(card) {
    // I can create 4 conditionals. if string includes a certain suite, return that suite as a string in lowercase
    
    if (card.includes('♣')) {
      return 'clubs'
    } else if (card.includes('♦')) {
      return 'diamonds'
    } else if (card.includes('♥')) {
      return 'hearts'
    } else if (card.includes('♠')) {
      return 'spades'
    }
  }
  
  //P: Will be a string. seems like will always be a string
  // R: return a string representing the suit of the card in lowercase
  // E: '3♣' => 'clubs'