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


  var startButton = document.querySelector("#startButton")

  startButton.addEventListener("click", function () {
    questionsDiv.classList.remove("hide")
    introClass.classList.add("hide")
    loadQuestion()
    clockTime = setInterval(timer, 1000)     
  })

  function loadQuestion(){
        
    questionHead.textContent=questions[questionIndex].question
    answer1.textContent=questions[questionIndex].answers[0]
    answer2.textContent=questions[questionIndex].answers[1]
    answer3.textContent=questions[questionIndex].answers[2]
    answer4.textContent=questions[questionIndex].answers[3]  
}

function checkAnswer(answerValue) {

  if (answerValue === questions[questionIndex].correct) {
    console.log("correct")
    questionIndex++;
    loadQuestion();

  }
  else {
    console.log("incorrect")
    timeRemaining = timeRemaining - 10;
  }
}

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
  
  function timer(){
    if(timeRemaining===0)
    {
      clearInterval(clockTime)  
      introClass.classList.add("hide")  //adding the hide class to make it invisible
      questionsDiv.classList.remove("hide") // removing the hide class to make it visible

    }
    timeLeft.textContent ="Time Remaining: " + timeRemaining
    timeRemaining--
  }