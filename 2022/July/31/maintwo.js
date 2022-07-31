// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead

function bump(x){
    //   I can split '',then use filter and .length to just get n's, inside a ternary
      return x.split('').filter(element => element === 'n').length > 15 ? 'Car Dead' : 'Woohoo!'
    
    }
    
    
    
    // P: Will be a string of _ and n's. unclear if always will be a string
    // R: retur a string representing Woohoo if n is less than 15, or car dead 
    // if more than 15 bumps
    // E: '___n' => 'Woohoo!'