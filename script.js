const questions = [
  {
      question: "In a right triangle, the measure of one of the angles is 49° and the hypotenuse has a length of 50 cm. Which of the following is the nearest approximation to the length, in cm, of the leg opposite to this angle?",
      optionA: "32.8",
      optionB: "57.5",
      optionC: "37.7",
      optionD: "30.3",
      correctOption: "optionC"
  },

  {
      question: "Sin 30° equals?", 
      optionA: "0",
      optionB: "1/2",
      optionC: "1/2 √3",
      optionD: "2/2 √3",
      correctOption: "optionB"
  },

  {
      question: "Cos 90° equals ?",
      optionA: "1",
      optionB: "Not defined",
      optionC: "√3 ",
      optionD: "0",
      correctOption: "optionD"
  },

  {
      question: "A rectangle has dimensions 10 cm by 5 cm. Determine the measures of the angles at the point where the diagonals intersect.",
      optionA: "42°",
      optionB: "47°",
      optionC: "53°",
      optionD: "64°",
      correctOption: "optionC"
  },

  {
      question: "The lengths of side AB and side BC of a scalene triangle ABC are 12 cm and 8 cm respectively. The size of angle C is 59°. Find the length of side AC in cm.",
      optionA: "10",
      optionB: "12.5",
      optionC: "5.7",
      optionD: "14",
      correctOption: "optionD"
  },

  {
      question: "From the top of a 200 meters high building, the angle of depression to the bottom of a second building is 20 degrees. From the same point, the angle of elevation to the top of the second building is 10 degrees. Calculate the height of the second building.",
      optionA: "200 + 200 x tan(10°) / tan(20°)",
      optionB: "200 + 200 x tan(10°) / sin(20°)",
      optionC: "200 + 200 x tan(20°) / tan(10°)",
      optionD: "200 + 200 x tan(20°) / sin(10°)",
      correctOption: "optionA"
  },

  {
      question: "Find the area of a square whose diagonal is 40 meters.",
      optionA: "40m²",
      optionB: "80m²",
      optionC: "800m²",
      optionD: "1600m²",
      correctOption: "optionC"
  },

  {
      question: "Which of the following is not an identity?",
      optionA: "1 - sec²a = tan²a",
      optionB: "sin² a + cos²a = 1",
      optionC: "1 + cot² a = csc² a",
      optionD: "sin a = tan a * cos a",
      correctOption: "optionA"
  },

  {
      question: "sin t + cos2 t / sin t equals",
      optionA: "sin t",
      optionB: "csc t",
      optionC: "sec t",
      optionD: "cos t",
      correctOption: "optionB"
  },

  {
      question: "Which of the following is an identity?",
      optionA: "sin (a) cos (a) = (1/2) sin(2a)",
      optionB: "sin a + cos a = 1",
      optionC: "sin(-a) = sin a",
      optionD: "tan a = cos a / sin a",
      correctOption: "optionA"
  },

  {
      question: "If 0 < t < 2π such that sin t = √2 / 2 and cot t < 0, then t = ",
      optionA: " π / 4",
      optionB: "5 π / 4",
      optionC: "7 π / 4",
      optionD: "3 π / 4",
      correctOption: "optionD"
  },

  {
      question: "Sin equals?",
      optionA: "Adjacent / Hypotenuse",
      optionB: "Hypotenuse / Opposite",
      optionC: "Hypotenuse / Adjacent",
      optionD: "Opposite / Hypotenuse",
      correctOption: "optionD"
  },


  {
      question: "Tan equals?",
      optionA: "Adjacent / Hypotenuse",
      optionB: "Hypotenuse / Opposite",
      optionC: "Opposite / Adjacent",
      optionD: "Opposite / Hypotenuse",
      correctOption: "optionC"
  },

  {
      question: "If 0 < t < 2π and sin t = - 1, then t = ",
      optionA: " π / 2",
      optionB: "3 π / 2",
      optionC: " 5 π / 4",
      optionD: " π",
      correctOption: "optionB"
  },

  {
      question: "sin (x) + sin(x - π) + sin(x + π) = ",
      optionA: "-sin(x)",
      optionB: "sin (x)",
      optionC: "sec (x)",
      optionD: "cos (x)",
      correctOption: "optionA"
  },

//   {
//       question: "How man states does Nigeria have ?",
//       optionA: "24",
//       optionB: "30",
//       optionC: "36",
//       optionD: "37",
//       correctOption: "optionC"
//   },

//   {
//       question: "____ is the capital of Nigeria ?",
//       optionA: "Abuja",
//       optionB: "Lagos",
//       optionC: "Calabar",
//       optionD: "Kano",
//       correctOption: "optionA"
//   },

//   {
//       question: "Los Angeles is also known as ?",
//       optionA: "Angels City",
//       optionB: "Shining city",
//       optionC: "City of Angels",
//       optionD: "Lost Angels",
//       correctOption: "optionC"
//   },

//   {
//       question: "What is the capital of Germany ?",
//       optionA: "Georgia",
//       optionB: "Missouri",
//       optionC: "Oklahoma",
//       optionD: "Berlin",
//       correctOption: "optionD"
//   },

//   {
//       question: "How many sides does an hexagon have ?",
//       optionA: "Six",
//       optionB: "Sevene",
//       optionC: "Four",
//       optionD: "Five",
//       correctOption: "optionA"
//   },

//   {
//       question: "How many planets are currently in the solar system ?",
//       optionA: "Eleven",
//       optionB: "Seven",
//       optionC: "Nine",
//       optionD: "Eight",
//       correctOption: "optionD"
//   },

//   {
//       question: "Which Planet is the hottest ?",
//       optionA: "Jupitar",
//       optionB: "Mercury",
//       optionC: "Earth",
//       optionD: "Venus",
//       correctOption: "optionB"
//   },

//   {
//       question: "where is the smallest bone in human body located?",
//       optionA: "Toes",
//       optionB: "Ears",
//       optionC: "Fingers",
//       optionD: "Nose",
//       correctOption: "optionB"
//   },

//   {
//       question: "How many hearts does an Octopus have ?",
//       optionA: "One",
//       optionB: "Two",
//       optionC: "Three",
//       optionD: "Four",
//       correctOption: "optionC"
//   },

//   {
//       question: "How many teeth does an adult human have ?",
//       optionA: "28",
//       optionB: "30",
//       optionC: "32",
//       optionD: "36",
//       correctOption: "optionC"
//   }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
  //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
  while (shuffledQuestions.length <= 9) {
      const random = questions[Math.floor(Math.random() * questions.length)]
      if (!shuffledQuestions.includes(random)) {
          shuffledQuestions.push(random)
      }
  }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
  handleQuestions()
  const currentQuestion = shuffledQuestions[index]
  document.getElementById("question-number").innerHTML = questionNumber
  document.getElementById("player-score").innerHTML = playerScore
  document.getElementById("display-question").innerHTML = currentQuestion.question;
  document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
  document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
  document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
  document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
  const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
  const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
  const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
  let correctOption = null

  options.forEach((option) => {
      if (option.value === currentQuestionAnswer) {
          //get's correct's radio input with correct answer
          correctOption = option.labels[0].id
      }
  })

  //checking to make sure a radio input has been checked or an option being chosen
  if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
      document.getElementById('option-modal').style.display = "flex"
  }

  //checking if checked radio button is same as answer
  options.forEach((option) => {
      if (option.checked === true && option.value === currentQuestionAnswer) {
          document.getElementById(correctOption).style.backgroundColor = "green"
          playerScore++ //adding to player's score
          indexNumber++ //adding 1 to index so has to display next question..
          //set to delay question number till when next question loads
          setTimeout(() => {
              questionNumber++
          }, 1000)
      }

      else if (option.checked && option.value !== currentQuestionAnswer) {
          const wrongLabelId = option.labels[0].id
          document.getElementById(wrongLabelId).style.backgroundColor = "red"
          document.getElementById(correctOption).style.backgroundColor = "green"
          wrongAttempt++ //adds 1 to wrong attempts 
          indexNumber++
          //set to delay question number till when next question loads
          setTimeout(() => {
              questionNumber++
          }, 1000)
      }
  })
}



//called when the next button is called
function handleNextQuestion() {
  checkForAnswer() //check if player picked right or wrong option
  unCheckRadioButtons()
  //delays next question displaying for a second just for some effects so questions don't rush in on player
  setTimeout(() => {
      if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
          NextQuestion(indexNumber)
      }
      else {
          handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
      }
      resetOptionBackground()
  }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
  const options = document.getElementsByName("option");
  options.forEach((option) => {
      document.getElementById(option.labels[0].id).style.backgroundColor = ""
  })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
  const options = document.getElementsByName("option");
  for (let i = 0; i < options.length; i++) {
      options[i].checked = false;
  }
}

// function for when all questions being answered
function handleEndGame() {
  let remark = null
  let remarkColor = null

  // condition check for player remark and remark color
  if (playerScore <= 3) {
      remark = "Bad Grades, Keep Practicing."
      remarkColor = "red"
  }
  else if (playerScore >= 4 && playerScore < 8) {
      remark = "Average Grades, You can do better."
      remarkColor = "orange"
  }
  else if (playerScore >= 8) {
      remark = "Excellent, Keep the good work going."
      remarkColor = "green"
  }
  const playerGrade = (playerScore / 10) * 100

  //data to display to score board
  document.getElementById('remarks').innerHTML = remark
  document.getElementById('remarks').style.color = remarkColor
  document.getElementById('grade-percentage').innerHTML = playerGrade
  document.getElementById('wrong-answers').innerHTML = wrongAttempt
  document.getElementById('right-answers').innerHTML = playerScore
  document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
  questionNumber = 1
  playerScore = 0
  wrongAttempt = 0
  indexNumber = 0
  shuffledQuestions = []
  NextQuestion(indexNumber)
  document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
  document.getElementById('option-modal').style.display = "none"
}