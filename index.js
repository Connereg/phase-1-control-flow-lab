let feet;

function scuberGreetingForFeet(feet){
  // Write your code here!
  
  if (feet <= 400){
    return 'This one is on me!'
  }
  else if (feet <= 2499){
    return 'I will gladly take your thirty bucks.'
  }
  else if (feet >= 2500){
    return 'No can do.'
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  const isNewYorkCity = city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  return isNewYorkCity

}


function switchOnCharmFromTip(tipAmount){
  // Write your code here!
  switch (tipAmount) {
    case 'generous':
      const generousTipResponse = "Thank you so much."
      return generousTipResponse;
      break;
    case 'not as generous':
      const notGenerousTipResponse = "Thank you."
      return notGenerousTipResponse;
      break;
    default:
      return 'Bye.'
      break;
  }

}