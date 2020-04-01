'use strict';

// Ask are you sick?
var askQuestionSick = confirm('Are you sick?');
  console.log(askQuestionSick); 

// Do you have Corona?
var coronaSick;
if(askQuestionSick === true) {
  coronaSick = confirm('Uh oh! Is it Corona Virus???');
} else {
  console.log('Thats good!');
}

// Do you want a Corona Beer?
var beerQuestion = confirm('Well do you atleast want a Corona to drink?');
  console.log(beerQuestion);

// How many do you want?
if(beerQuestion === true) {
  buybeer1();
} else {
  alert('More of a Tecate` kind of person huh? Ok, I get it.');
}

function buybeer1() {
  var coronaAmount = prompt('How many would you like?');
  console.log(coronaAmount + ' BEERS!')
  if(coronaAmount > 18) {
    confirm('Damn! Thats alot of beer!');
  } else if(coronaAmount > 10)  {
    confirm('No problem!');
  } else {
    confirm('You sure you dont want anymore?');
  }
}