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
  render(questionIndex);
});


function render(questionIndex) {

  questionsDiv.innerHTML = "";
  ulCreate.innerHTML = "";
  // for loop through all array 
  for (var i = 0; i < questions.length; i++){
    // appends questions title only 
    const userQuestion = questions[questionIndex].title;
    const userChoices = questions[questionIndex].choices;
    questionsDiv.textContent = userQuestion;

  }}

  userChoices.forEach(function (newItem) {
    const listItem = document.createElement("li");
    listItem.textContext = newItem;
    questionsDiv.appendChild(ulCreate);
    ulCreate.appendChild(listItem);
    listItem.addEventListener("click", (compare));
  })

  // Event to compare choices with answers
  function compare(event) {
    const element = event.target;
    
    if (element.matches("li")) {

      const createDiv = document.createElement("div");
      createDiv.setAttribute("id", "createDiv");

      if (element.textContent == questions[questionIndex].answer) {
        score++;
        createDiv.textContent = "Correct! The answer is: " + questions[questionIndex].answer;

      } else {
        // deduct -5 seconds for each wrong answer
        secondsLeft = secondsLeft - penalty;
        createDiv.textContent = "Wrong! The correct answer is: " + questions[questionIndex].answer;
      }

    }
    // Question Index determines number question is on 
    questionIndex++;

    if (questionIndex >= questions.length) {
      // all done will append last page with user stats
      allDone();
      createDiv.textContent = "End of quiz!" + "" + "you got " + score + "/" + questions.length + " Correct!";
      } else {
        render(questionIndex);
      }
      questionsDiv.appendChild(createDiv);

  }
// all done will append last page 
function allDone() {
  questionsDiv.innerHTML = "";
  currentTime.innerHTML = "";

  // Heading

  const createH1 = document.createElement("h1");
  createH1.setAttribute("id", "createH1");
  createH1.textContent = "All Done!"

  questionsDiv.appendChild(createH1);

  // Paragraph
  const createP = document.createElement("p");
  createP.setAttribute("id", "createP");

  questionsDiv.appendChild(createP);

  // Caculate time remaining and replace it with the score 
  if(secondsLeft >= 0) {
    const timeRemaining = secondsLeft;
    const createP2 = document.createElement("p");
    clearInterval(holdInterval);
    createP.textContent = "your final score is : " + timeRemaining;

    questionsDiv.appendChild(createP2);
  }

  // label
  

}
