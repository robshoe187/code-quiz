//declaring variables
var questions = [
    {
        question: "What can Javascript arrays store?", 
        answers: ["Numbers and Strings", "Arrays", "Booleans", "All of the Above"],
        correct: 4
    
    },
    { 
        question: "Commonly used data types do not include?", 
        answers: ["Strings", "Booleans", "Alerts", "Numbers"],
        correct: 3
    },

    {
        question: "An if/else statement is enclosed with?", 
        answers: ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"],
        correct: 2
    },

    {
        question: "A useful tool for printing content to the console for debugging is?", 
        answers: ["JavaScript", "Terminal/Bash", "For Loops", "console.log"],
        correct: 4
    }
];
var timeRemaining =  (questions.length * 15) 
var questionIndex = 0;
var timeLeft= document.querySelector("#time-left")

var questionHead = document.querySelector("#questionHeadid")
var answer1 = document.querySelector("#answerid1")
var answer2 = document.querySelector("#answerid2")
var answer3 = document.querySelector("#answerid3")
var answer4 = document.querySelector("#answerid4")
var highscoring = document.querySelector("#highscores")
var scoreSubmit = document.querySelector("#submit")
var highscoreArray = []
var highscoreIndex = 0

var startButton = document.querySelector("#startButton")
var backButton = document.querySelector("#backBtn")

//start the quiz function
startButton.addEventListener("click", function () {
  clockTime = setInterval(timer, 1000)
  questionsDiv.classList.remove("hide")
  introClass.classList.add("hide")
  highscoring.classList.add("hide")
  loadQuestion()
  })

//function to progress through questions
  function loadQuestion(){
    
    if (questionIndex < questions.length) {
      questionHead.textContent=questions[questionIndex].question
      answer1.textContent=questions[questionIndex].answers[0]
      answer2.textContent=questions[questionIndex].answers[1]
      answer3.textContent=questions[questionIndex].answers[2]
      answer4.textContent=questions[questionIndex].answers[3]
    } else { 
      clearTimeout(clockTime)
      highScores(timeRemaining)
    }
  }

//if the answer is incorrect deduct 10 seconds
function checkAnswer(answerValue) {

  if (answerValue === questions[questionIndex].correct) {
    questionIndex++;
    loadQuestion();
  }
  else {
    timeRemaining = timeRemaining - 10;
  }
}

//Button event listener for questions
  answer1.addEventListener("click", function(){
      checkAnswer(1)
    })
  answer2.addEventListener("click", function(){
      checkAnswer(2);
    })
  answer3.addEventListener("click", function(){
      checkAnswer(3);
    })
  answer4.addEventListener("click", function(){
      checkAnswer(4);
    })
  
    //timer and hiding welcome screen function
  function timer(){
    if(timeRemaining === 0)
    {
      questionsDiv.classList.add("hide")
      highscores.classList.remove("hide") 
      clearInterval(clockTime)
    }
    timeLeft.innerHTML =  ("Time Remaining: " + timeRemaining)
    timeRemaining--
  }
  //adding the score to the high score array
  function highScores(score) {
    questionsDiv.classList.add("hide")
    highscoring.classList.remove("hide")
    
    scoreSubmit.addEventListener("click", function(){
      var initializer = document.getElementById("initials").value;
      console.log(initializer)
      highscoreArray.push(initializer)
      highscoreArray.push(score)
      for (let i = 0; i < highscoreArray.length; i++) {
        var li = document.createElement('li')
        var textNode = document.createTextNode(highscoreArray[i])
        li.appendChild(textNode)
        document.getElementById("highscoreList").appendChild(li)
    }
  })

  //button to exit the high score screen
    backButton.addEventListener("click",function() {
      questionIndex = 0
      timeRemaining = (questions.length * 15)
      introClass.classList.remove("hide")
      highscoring.classList.add("hide")
      timeRemaining = (questions.length * 15)
    })
    }
