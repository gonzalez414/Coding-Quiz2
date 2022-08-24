// Array of questions and answers
const questions = [

    { question: 'What does CSS stand for?',
    choices:['Cursive Standard Style', 'Crazy Style Style', 'Cascading Style Sheets', 'Creative Style Station'],
    answer: 'Cascading style sheets'
    },

    {question: 'What is 10*10',
    choices: ['10', '100,000', '1000','100'],
    answer: '100'
    
  },

  {
    question: 'what is a Boolean?',
    choices: [ 'represents two values: true or false', 'represent and manipulate a sequence of characters', 'block of code designed to perform a particular task', 'none of the above'],
    answer: 'represents tow values: true or false '
  },

  {
    question: 'HyperText Markup Language is short for.',
    choices: [ 'String', 'HTMl', 'boolean', 'all of the above'],
    answer: 'HTML'

  }

];

const score = 0;
const questionIndex = 0;

// Working Code
const currentTime = document.querySelector('#currentTime');
const timer = document.querySelector('startTime');
const questionsDiv = document.querySelector('#questionDiv');
const wrapper = document.querySelector('#wrapper')

// 15 Seconds per question 
const secondsLeft = 75;
const holdInterval = 0;
const penalty = 10;
const ulCreate = document.createElement('ul')

// trigger timer on button, shows user a display on screen

timer.addEventListener('Click', function () {

  if (holdInterval === 0) {
    holdInterval = setInterval(function () {
      secondsLeft--;
      currentTime, textContent = 'Time: ' + secondsLeft;

      if (secondsLeft <= 0){
        clearInterval(holdInterval);
        allDone();
        currentTime.textContent = "time's up!" 
      }
    }, 1000);
  }
  WebGL2RenderingContext(questionIndex);
});

