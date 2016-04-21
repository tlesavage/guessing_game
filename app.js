var pUserName = document.getElementById('user-Name');
var pAnsOne = document.getElementById('ans-one');
var pAnsTwo = document.getElementById('ans-two');
var pAnsThree = document.getElementById('ans-three');
var pAnsFour = document.getElementById('ans-four');
var pAnsFive = document.getElementById('ans-five');
var pCorrectGuesses = document.getElementById('correctGuesses');
var ele = document.getElementById('textColor');
var counter = 0;

var els = [pAnsOne, pAnsTwo, pAnsThree, pAnsFour, pAnsFive];

var correctImageOne = document.getElementById('correctImageOne');
var correctImageTwo = document.getElementById('correctImageTwo');
var correctImageThree = document.getElementById('correctImageThree');
var correctImageFour = document.getElementById('correctImageFour');
var correctImageFive = document.getElementById('correctImageFive');
var correctImages = [correctImageOne, correctImageTwo, correctImageThree, correctImageFour, correctImageFive];

var arrayQuestions = [
  'Is Seattle my favorite city? (Y/N)',
  'Is my favorite food pizza? (Y/N)',
  'Is my favorite color burgandy? (Y/N)',
  'Guess my age!',
  'Guess my favorite number! (1-10)'
];
var arrayAnswers = [
  'Y',//['Y', 'YES'] referenced as userInput === answer[0]
  'Y',
  'Y',
  34,
  1,
];

var userName = prompt('What\'s your name?');
pUserName.textContent = userName;

function game(question, answer, element,image) {
  var userInput = prompt(question).toUpperCase();
  if(isNaN(parseInt(userInput)) === false) {//if the value in the string is a number, then do something

   //isNaN(parseInt(userInput))===false [checking if it's a number value, turning it into a boolean]
    userInput = parseInt(userInput);//if it's a number, this turns the   string value into a true number to be evaluated
  }
  if (typeof answer === 'number') {
    var newCounter = 0;
    while (newCounter <= 3) {
      if(userInput === answer) {//just checking if it's a number or not - if it is, DO THIS:
        element.textContent = 'That is right!';
        element.className = 'correct';
        image.innerHTML= "<img src='goldstar.jpg' border=‘0’/>";
        counter++;
        break;
      } else if(userInput !== answer) {
        element.textContent = 'try again!';
        element.className = 'incorrect';
        newCounter++;
        console.log('running');
        userInput = parseInt(prompt('try again!'));
      }
    }
  } else {//all other data types(ie - other strings)
    console.log('your number values are correct. we\'re checking if user inputted a string value');
    if(userInput === answer){
      element.textContent = 'That is right!';
      element.className = 'correct';
      image.innerHTML= "<img src='goldstar.jpg' border=‘0’/>";
      counter++;
    } else {
      element.textContent = 'Nope';
      element.className = 'incorrect';
    }
  }
}

for(var i = 0; i < arrayQuestions.length; i++) {
  game(arrayQuestions[i], arrayAnswers[i], els[i], correctImages[i]);
}

function correctAnswersCounter(){
  pCorrectGuesses.textContent = userName + ' you got : ' + counter + ' answers out of ' + arrayAnswers.length + ' correct!';
}
correctAnswersCounter();
