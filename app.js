var pUserName = document.getElementById('user-Name');
var pAnsOne = document.getElementById('ans-one');
var pAnsTwo = document.getElementById('ans-two');
var pAnsThree = document.getElementById('ans-three');
var pAnsFour = document.getElementById('ans-four');
var pAnsFive = document.getElementById('ans-five');
var pCorrectGuesses = document.getElementById('correctGuesses');
<<<<<<< HEAD
var ele = document.getElementById('textColor');
=======
>>>>>>> 367e61da24c71d77f193cbff7366af5bed1733b7
var counter = 0;

var els = [pAnsOne, pAnsTwo, pAnsThree, pAnsFour, pAnsFive];

<<<<<<< HEAD
var correctImageOne = document.getElementById('correctImageOne');
var correctImageTwo = document.getElementById('correctImageTwo');
var correctImageThree = document.getElementById('correctImageThree');
var correctImageFour = document.getElementById('correctImageFour');
var correctImageFive = document.getElementById('correctImageFive');
var correctImages = [correctImageOne, correctImageTwo, correctImageThree, correctImageFour, correctImageFive];

=======
>>>>>>> 367e61da24c71d77f193cbff7366af5bed1733b7
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
<<<<<<< HEAD
  1,
=======
  21,
>>>>>>> 367e61da24c71d77f193cbff7366af5bed1733b7
];

var userName = prompt('What\'s your name?');
pUserName.textContent = userName;

<<<<<<< HEAD
function game(question, answer, element,image) {
=======
function game(question, answer, element) {
>>>>>>> 367e61da24c71d77f193cbff7366af5bed1733b7
  var userInput = prompt(question).toUpperCase();
  if(isNaN(parseInt(userInput)) === false) {//if the value in the string is a number, then do something

   //isNaN(parseInt(userInput))===false [checking if it's a number value, turning it into a boolean]
    userInput = parseInt(userInput);//if it's a number, this turns the   string value into a true number to be evaluated
  }
  if (typeof answer === 'number') {
    var newCounter = 0;
    while (newCounter <= 3) {
      if(userInput === answer) {//just checking if it's a number or not - if it is, DO THIS:
<<<<<<< HEAD
        element.textContent = 'That is right!';
        element.className = 'correct';
        image.innerHTML= "<img src='goldstar.jpg' border=‘0’/>";
=======
        element.textContent = 'Good Guess!';
>>>>>>> 367e61da24c71d77f193cbff7366af5bed1733b7
        counter++;
        break;
      } else if(userInput !== answer) {
        element.textContent = 'try again!';
<<<<<<< HEAD
        element.className = 'incorrect';
=======
>>>>>>> 367e61da24c71d77f193cbff7366af5bed1733b7
        newCounter++;
        console.log('running');
        userInput = parseInt(prompt('try again!'));
      }
    }
  } else {//all other data types(ie - other strings)
    console.log('your number values are correct. we\'re checking if user inputted a string value');
    if(userInput === answer){
<<<<<<< HEAD
      element.textContent = 'That is right!';
      element.className = 'correct';
      image.innerHTML= "<img src='goldstar.jpg' border=‘0’/>";
      counter++;
    } else {
      element.textContent = 'Nope';
      element.className = 'incorrect';
=======
      element.textContent = 'Correct!';
      counter++;
    } else {
      element.textContent = 'Nope';
>>>>>>> 367e61da24c71d77f193cbff7366af5bed1733b7
    }
  }
}

for(var i = 0; i < arrayQuestions.length; i++) {
<<<<<<< HEAD
  game(arrayQuestions[i], arrayAnswers[i], els[i], correctImages[i]);
=======
  game(arrayQuestions[i], arrayAnswers[i], els[i]);
>>>>>>> 367e61da24c71d77f193cbff7366af5bed1733b7
}

function correctAnswersCounter(){
  pCorrectGuesses.textContent = userName + ' you got : ' + counter + ' answers out of ' + arrayAnswers.length + ' correct!';
}
correctAnswersCounter();
