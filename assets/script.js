const questionDisplay = document.querySelector("#question");
const choicesDisplay = document.querySelector("#choices");
const choice1 = document.querySelector("#choice_1");
const choice2 = document.querySelector("#choice_2");
const choice3 = document.querySelector("#choice_3");
const choice4 = document.querySelector("#choice_4");
const submitChoiceBtn = document.querySelector("#submit-choice");

let score = 0;
let letterGrade = "";
let timeLeft = 80; // TO-DO: Implement Timer functions, setTimeout, etc.

let currentQuestion = 1;

const questions = {
    question1: {
        question: "How much wood can a woodchuck chuck?",
        choices: ["a lot", "some", "not enough", "as much wood as a woodchuck could"],
        correctAnswer: "choice4",
        userChoice: "blank"
    },
    question2: {
        question: "question 2 will go here",
        choices: ["first choice", "second choice", "third choice", "fourth choice"],
        correctAnswer: "choice1",
        userChoice: "blank"
    },
    question3: {
        question: "question 3 will go here",
        choices: ["first choice", "second choice", "third choice", "fourth choice"],
        correctAnswer: "choice1",
        userChoice: "blank"
    },
    question4: {
        question: "question 4 will go here",
        choices: ["first choice", "second choice", "third choice", "fourth choice"],
        correctAnswer: "choice1",
        userChoice: "blank"
    },
    question5: {
        question: "question 5 will go here",
        choices: ["first choice", "second choice", "third choice", "fourth choice"],
        correctAnswer: "choice1",
        userChoice: "blank"
    },
    question6: {
        question: "question 6 will go here",
        choices: ["first choice", "second choice", "third choice", "fourth choice"],
        correctAnswer: "choice1",
        userChoice: "blank"
    },
    question7: {
        question: "question 7 will go here",
        choices: ["first choice", "second choice", "third choice", "fourth choice"],
        correctAnswer: "choice1",
        userChoice: "blank"
    },
    question8: {
        question: "question 8 will go here",
        choices: ["first choice", "second choice", "third choice", "fourth choice"],
        correctAnswer: "choice1",
        userChoice: "blank"
    },
    question9: {
        question: "question 9 will go here",
        choices: ["first choice", "second choice", "third choice", "fourth choice"],
        correctAnswer: "choice1",
        userChoice: "blank"
    },
    question10: {
        question: "question 10 will go here",
        choices: ["first choice", "second choice", "third choice", "fourth choice"],
        correctAnswer: "choice1",
        userChoice: "blank"
    },
}

function storeUserChoice(questionNum, choicePick) {
    switch (questionNum) {
        case 1:
            questions.question1.userChoice = choicePick;
            if (choicePick == questions.question1.correctAnswer) {
                score++;
                // console.log(`ChoicePick: ${choicePick}\nCorrect Answer: ${questions.question1.correctAnswer}\nscore: ${score}`);
                alert("Correct");
                return score;
            } else {
                // console.log(`score: ${score}`);
                alert("Wrong");
                return score;
            }
        case 2:
            questions.question2.userChoice = choicePick;
            if (choicePick == questions.question2.correctAnswer) {
                score++;
                return score;
            } else {
                return score;
            }
        case 3:
            questions.question3.userChoice = choicePick;
            if (choicePick == questions.question3.correctAnswer) {
                score++;
                return score;
            } else {
                return score;
            }
        case 4:
            questions.question4.userChoice = choicePick;
            if (choicePick == questions.question4.correctAnswer) {
                score++;
                return score;
            } else {
                return score;
            }
        case 5:
            questions.question5.userChoice = choicePick;
            if (choicePick == questions.question5.correctAnswer) {
                score++;
                return score;
            } else {
                return score;
            }
        case 6:
            questions.question6.userChoice = choicePick;
            if (choicePick == questions.question6.correctAnswer) {
                score++;
                return score;
            } else {
                return score;
            }
        case 7:
            questions.question7.userChoice = choicePick;
            if (choicePick == questions.question7.correctAnswer) {
                score++;
                return score;
            } else {
                return score;
            }
        case 8:
            questions.question8.userChoice = choicePick;
            if (choicePick == questions.question8.correctAnswer) {
                score++;
                return score;
            } else {
                return score;
            }
        case 9:
            questions.question9.userChoice = choicePick;
            if (choicePick == questions.question9.correctAnswer) {
                score++;
                return score;
            } else {
                return score;
            }
        case 10:
            questions.question10.userChoice = choicePick;
            if (choicePick == questions.question10.correctAnswer) {
                score++;
                return score;
            } else {
                return score;
            }
        default:
            break;
    }
}

function submitChoice() {
    const radios = document.getElementsByName('choice');
    let userChoice = "";

    // loop to check which radio input on the page is checked
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            userChoice = radios[i].value;
            break;
        }
    }

    storeUserChoice(currentQuestion, userChoice);

    if (currentQuestion < 10) {
        let nextQuestion = currentQuestion += 1;
        viewQuestion(nextQuestion);
    } else {
        gradeQuiz();
    }
    
}

function viewQuestion(questionNum) {

    console.log(`Current score: ${score}`);

    switch (questionNum) {
        case 1:
            questionDisplay.textContent = questions.question1.question;
            choice1.textContent = questions.question1.choices[0];
            choice2.textContent = questions.question1.choices[1];
            choice3.textContent = questions.question1.choices[2];
            choice4.textContent = questions.question1.choices[3];
            break;
        case 2:
            questionDisplay.textContent = questions.question2.question;
            choice1.textContent = questions.question2.choices[0];
            choice2.textContent = questions.question2.choices[1];
            choice3.textContent = questions.question2.choices[2];
            choice4.textContent = questions.question2.choices[3];
            break;
        case 3:
            questionDisplay.textContent = questions.question3.question;
            choice1.textContent = questions.question3.choices[0];
            choice2.textContent = questions.question3.choices[1];
            choice3.textContent = questions.question3.choices[2];
            choice4.textContent = questions.question3.choices[3];
            break;
        case 4:
            questionDisplay.textContent = questions.question4.question;
            choice1.textContent = questions.question4.choices[0];
            choice2.textContent = questions.question4.choices[1];
            choice3.textContent = questions.question4.choices[2];
            choice4.textContent = questions.question4.choices[3];
            break;
        case 5:
            questionDisplay.textContent = questions.question5.question;
            choice1.textContent = questions.question5.choices[0];
            choice2.textContent = questions.question5.choices[1];
            choice3.textContent = questions.question5.choices[2];
            choice4.textContent = questions.question5.choices[3];
            break;
        case 6:
            questionDisplay.textContent = questions.question6.question;
            choice1.textContent = questions.question6.choices[0];
            choice2.textContent = questions.question6.choices[1];
            choice3.textContent = questions.question6.choices[2];
            choice4.textContent = questions.question6.choices[3];
            break;  
        case 7:
            questionDisplay.textContent = questions.question7.question;
            choice1.textContent = questions.question7.choices[0];
            choice2.textContent = questions.question7.choices[1];
            choice3.textContent = questions.question7.choices[2];
            choice4.textContent = questions.question7.choices[3];
            break;
        case 8:
            questionDisplay.textContent = questions.question8.question;
            choice1.textContent = questions.question8.choices[0];
            choice2.textContent = questions.question8.choices[1];
            choice3.textContent = questions.question8.choices[2];
            choice4.textContent = questions.question8.choices[3];
            break;  
        case 9:
            questionDisplay.textContent = questions.question9.question;
            choice1.textContent = questions.question9.choices[0];
            choice2.textContent = questions.question9.choices[1];
            choice3.textContent = questions.question9.choices[2];
            choice4.textContent = questions.question9.choices[3];
            break;
        case 10:
            questionDisplay.textContent = questions.question10.question;
            choice1.textContent = questions.question10.choices[0];
            choice2.textContent = questions.question10.choices[1];
            choice3.textContent = questions.question10.choices[2];
            choice4.textContent = questions.question10.choices[3];
            break;
        default:
            break;
    }
}

function gradeQuiz() {
    // This function will show the results
    // score/10
    // ..maybe assign letter grade to score and return it.

    switch (true) {
        case (score == 10):
            letterGrade = 'A+';
            break;
        case (score == 9):
            letterGrade = 'A';
            break;
        case (score == 8):
            letterGrade = 'B';
            break;
        case (score == 7):
            letterGrade = 'C';
            break;
        case (score == 6):
            letterGrade = 'D';
            break;
        case (score <= 5):
            letterGrade = 'F';
            break;
        default:
            break;
    }

    console.log(`Your Score: ${score} out of 10\nLetter Grade: ${letterGrade}`);
}

submitChoiceBtn.addEventListener("click", submitChoice);

viewQuestion(1);