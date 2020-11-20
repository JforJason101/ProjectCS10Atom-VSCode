// FUNCTIONS -->

function theQuiz() {

// to store the quiz of course
const output = [];

// for each of my questions
theQs.forEach( (currentQ, QNumber) => {
    // code to run each question goes here

      // stores answers
      let answer = [];

      // for each available answer (...)
      for(letter in currentQ.answer) {

        // HTML radio button
        answer.push(
          `<label>
          <input type= "radio" name="question${QNumber}" value = "${letter}">
          ${letter} :
          ${currentQ.answer[letter]}
          </label>`
        );
      }

      // add question and the answers to output
      output.push(
        `<div class = "question"> ${currentQ.question} </div>
         <div class = "answer"> ${answer.join('')} </div>`
      );
    }
  );
  // combine output list into html string and print it
  quizContainer.innerHTML = output.join('');
}

function displayResults() {

  // grab the answer container
  const answerContainers = quizContainer.querySelectorAll('.answer');

  // user's answers
  let numCorrect = 0;

  // for each question...
  myQs.forEach( (currentQ,QNumber) => {

    // find selected answer
    const answerContainers2 =  answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(Selector) || {}).value;

    // 'if the answer is correct' statement
    if(userAnswer === currentQ.correctAnswer) {
      // adds to the number of correct answers
      numCorrect++;

      // colour the answers in the correct color - Green
      answerContainers2[QNumber].style.colour = 'lightgreen';
    }
    // if the answer is blank or incorrect do this -->
    else {
      // colour it red
      answerContainers[questionNumber].style.colour = 'red'
    }
  }
);

  // show the number of correct answers out of total
  if(numCorrect === myQs.length) {
    resultsContainer.innerHTML = `Amazin! You got no questions wrong!`
  }
  else {
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }
}

  // Link

  const link = document.createElement('Link');
  let linkText = document.createTextNode("link");
    link.appendChild(linkText);
    link.title = "link";
    link.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    document.body.appendChild(link);

  // Link

// Variables

/* We can then select these HTML IDs (in the quotations)
and store references to them in varconst theQs variables like so */
//////////////////////////////////////////////////////////
const quizContain = document.getElementById('quizhold');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
//////////////////////////////////////////////////////////
const launchlast = document.getElementById('lastquestion').value;
const theQs = [
{
  question: "Who is Karl Marx?"
  answers: {
    a: "Godfather of Capitalism",
    b: "Santa Claus's father",
    c: "Father of Adam Smith",
    d: "None"
  },
  ans: "d"
},

{
  question: italics("TASK:")
  "Say 'hi' to juan."
  const img = document.createElement('img')
  img.src = 'https://i.kym-cdn.com/entries/icons/mobile/000/035/644/juancover.jpg'
  answers: {
    a: italics("y e s"),
    b: italics("N O")
  },
  ans: "b"
},

{
  question: "What is socialism?"
  answers: {
    a: "When the gubberment does stuff",
    b: "When capitalism",
    c: "when workers own business",
    d: "when no iphone"
  },
  ans: "c"
}
];

// Variables


    // builds quiz
    theQuiz();
    // builds quiz

// Event Listeners --->
submitButton.addEventListener('click')



}

}
