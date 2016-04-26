
var pUserName = document.getElementById('user-Name');
var pAnsOne = document.getElementById('ans-one');
var pAnsTwo = document.getElementById('ans-two');
var pAnsThree = document.getElementById('ans-three');
var pAnsFour = document.getElementById('ans-four');
var pAnsFive = document.getElementById('ans-five');
var pCorrect= document.getElementById('correctGuesses');
var counter = 0;

var els = [pAnsOne, pAnsTwo, pAnsThree, pAnsFour, pAnsFive];

var arrQuestions = [
  'Is Ace Ventura my fav movie? (Y/N)',
  'Is my fav food pizza? (Y/N)',
  'Is my fav color burgandy? (Y/N)',
  'Guess my age',
  'Guess a number (1-10)'
];
var arrAnswers = [
  'Y',
  'N',
  'Y',
  34,
  21,
];

var userName = prompt('What is my name?');
pUserName.textContent = userName;

function game(question, answer, element)  {
  var userInput = prompt(question).toUpperCase();
  if (isNan(parseInt(userInput)) === false)
      userInput = parseInt(userInput);
}
if (typeof answer === 'number') {
  var newCounter = 0;
  while (newCounter <= 3) {
    if(userInput === answer) {
      element.textContent = 'That\'s Right';
      counter++;
      break;
    } else if(userInput !== answer){
      newCounter++;
      element.textContent = 'Guess again';
      userInput = parseInt(prompt('Guess again'));
    }
  }
} else {
  if(userInput === answer){
    element.textContent = 'Correct';
    counter++;
  } else {
    element.textContent = 'Not Correct';
    }
  }
}

for(var i = 0; i < arrQuestions.length; i++) {
  game(arrQuestions[i], arrAnswers[i], els[i]);
}

function correctAnswersCounter(){
  pCorrect.textContent = userName + ' you got : ' + counter + ' answers out of ' + arrAnswers.length + ' correct!';
}
correctAnswersCounter();
