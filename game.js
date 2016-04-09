
var name = 'tom';
var city = 'boulder';
var team = 'seahawks';
var correctAnswers = 0;
// var counter = 0;

var userInputName = prompt('What is my name?').toLowerCase();
if (userInputName === name) {
  alert('Cool. I like that name.');
  console.log('User answered' + name);
  correctAnswers++;
} else {
  alert('That name is ok I guess');
  console.log('User did not answer Tom');
}
var userInputCity = prompt('Where did you grow up?').toLowerCase();
if (userInputCity === city) {
  alert('Cool spot');
  console.log('User answered Boulder');
  correctAnswers++;
} else {
  alert('You grew up outside of Boulder CO');
  console.log('User answered a city other than Boulder CO');
}
var userInputTeam = prompt('What is your favorite sports team?').toLowerCase();
if (userInputTeam === team){
  alert('Go Seahawks');
  console.log('User answered Seahawks');
  correctAnswers++;
} else {
  alert('Your team sucks');
  console.log('User answered a team other than Seahawks');
}

var userNum = parseInt(prompt('Guess a number.'));
while(correctAnswers => 0){
if (userNum === 4 ) {
  alert('You picked the right number!');
  console.log("number equals 4");
  correctAnswers++;
  break;
} else if (userNum > 4) {
  alert('That number is too high');
  console.log("number is too high");
  userNum = parseInt(prompt('Guess lower'));
} else if (userNum < 4){
  alert('That number is too low');
  console.log("number is too low");
  userNum = parseInt(prompt('Guess higher'));
 }
}
alert('You got ' + correctAnswers + ' correct');
