// TO-DO: Create function/event listener for feature of clearing high score list.
// TO-DO: Create function to update highScores array with data from local storage.

const questionDisplay = document.querySelector("#question");
const questionNumberDisplay = document.querySelector("#question-number")
const choicesDisplay = document.querySelector("#choices");
const scoresDisplay = document.querySelector("#score-text");
const timerDisplay = document.querySelector("#timer-text");
const highScoreListDisplay = document.querySelector("#high-scores");
const highScore1Display = document.querySelector("#high-score-1");
const highScore2Display = document.querySelector("#high-score-2");
const highScore3Display = document.querySelector("#high-score-3");
const mainContainer = document.querySelector("#mainContainer");
const resultsDisplay = document.querySelector("#results");
const letterGradeDisplay = document.querySelector("#letter-grade");
const choice1 = document.querySelector("#choice_1");
const choice2 = document.querySelector("#choice_2");
const choice3 = document.querySelector("#choice_3");
const choice4 = document.querySelector("#choice_4");
const submitChoiceBtn = document.querySelector("#submit-choice");
const resetBtn = document.querySelector("#reset")
const viewHighScoresBtn = document.querySelector("#view-high-scores");

let score = 0;
let letterGrade = "";
let timeLeft = 120; // TO-DO: Implement Timer function to remove seconds from timer when incorrect answer chosen.
let highScores = [];

// retrieve high score data from local storage if it exists and then inject high score data into HTML:
if(localStorage.getItem(`highScores`) !== null) {
    highScores = JSON.parse(localStorage.getItem(`highScores`));
    displayScores();
}

let currentQuestion = 1;

const questions = {
    question1: {
        question: "Which method will turn an object into a JSON string? +3pts", // hint: string cheese is delicious
        choices: ["JSON.stringify(obj);", "JSON.parse('str');", "JSON.strConv('str');", "JSON.toText(obj);"],
        correctAnswer: "choice1",
        userChoice: "blank"
    },
    question2: {
        question: 'What Does "ECMA" in ECMAScript stand for? +2pts', // hint: I like Europe
        choices: ["European Computer Manufacturer's Association", "Eastern China Mobile Application", "Exact Calculation Main Asynchronous", "Earth Community of Mammal Apes"],
        correctAnswer: "choice1",
        userChoice: "blank"
    },
    question3: {
        question: "To center a flexbox container one can use the justify-content property and the ___________-items property +1pt", // hint: CSS flexbox questions should always be googled
        choices: ["align", "join", "spread", "push"],
        correctAnswer: "choice1",
        userChoice: "blank"
    },
    question4: {
        question: "What does the array.push() method do? +2pts", // hint: push it onto the end. lil bump onto the end.
        choices: ["adds element to end of array", "adds element to beginning of array", "pushes off the last element from the array", "deletes the first element in an array"],
        correctAnswer: "choice1",
        userChoice: "blank"
    },
    question5: {
        question: "What git command is used to add changes to the stage? +1pt", // hint: probably the one you are guessing.
        choices: ["git add -A", "git merge", "git pull", "git commit -m"],
        correctAnswer: "choice1",
        userChoice: "blank"
    },
    question6: {
        question: "Reloading of the webpage on certain events can be prevented with: +1pt", // hint: prevent the default behavior
        choices: ["event.preventDefault();", "event.defaultPrevent();", "event.stopReload();", "event.reloadStop();"],
        correctAnswer: "choice1",
        userChoice: "blank"
    },
    question7: {
        question: "localStorage can hold what types of data? +2pts", // hint: only two "simple" data types
        choices: ["numbers and strings", "numbers, strings, booleans", "objects and arrays", "only strings"],
        correctAnswer: "choice1",
        userChoice: "blank"
    },
    question8: {
        question: "How do you access an array item at index value 1? +2pts", // hint: bracket notation
        choices: ["myArray[1]", "myArray.1", "myArray(1)", "myArray.itemAtIndex(1)"],
        correctAnswer: "choice1",
        userChoice: "blank"
    },
    question9: {
        question: "What is an example of a float datatype? +1pt", // hint: decimals
        choices: ["12.245", "34", "twelve", "[0,1,2]"],
        correctAnswer: "choice1",
        userChoice: "blank"
    },
    question10: {
        question: "Event bubbling is when.. +2pts", // hint: Something to do with propogation.
        choices: ["..events propogate up the DOM tree", "..events become inaccessible", "..an error stops the event from firing", "..the event creates a hole in the spacetime continium."], // hint: it is not the last one.
        correctAnswer: "choice1",
        userChoice: "blank"
    },
}

function storeUserChoice(questionNum, choicePick) {
    switch (questionNum) {
        case 1:
            questions.question1.userChoice = choicePick;
            if (choicePick == questions.question1.correctAnswer) {
                score += 3;
                // console.log(`ChoicePick: ${choicePick}\nCorrect Answer: ${questions.question1.correctAnswer}\nscore: ${score}`);
                return score;
            } else {
                // console.log(`score: ${score}`);
                timeLeft -= 20;
                return score;
            }
        case 2:
            questions.question2.userChoice = choicePick;
            if (choicePick == questions.question2.correctAnswer) {
                score += 2;
                return score;
            } else {
                timeLeft -= 20;
                return score;
            }
        case 3:
            questions.question3.userChoice = choicePick;
            if (choicePick == questions.question3.correctAnswer) {
                score += 1; // or could use: score++ here
                return score;
            } else {
                timeLeft -= 20;
                return score;
            }
        case 4:
            questions.question4.userChoice = choicePick;
            if (choicePick == questions.question4.correctAnswer) {
                score += 2;
                return score;
            } else {
                timeLeft -= 20;
                return score;
            }
        case 5:
            questions.question5.userChoice = choicePick;
            if (choicePick == questions.question5.correctAnswer) {
                score += 1;
                return score;
            } else {
                timeLeft -= 20;
                return score;
            }
        case 6:
            questions.question6.userChoice = choicePick;
            if (choicePick == questions.question6.correctAnswer) {
                score += 1;
                return score;
            } else {
                timeLeft -= 20;
                return score;
            }
        case 7:
            questions.question7.userChoice = choicePick;
            if (choicePick == questions.question7.correctAnswer) {
                score += 2;
                return score;
            } else {
                timeLeft -= 20;
                return score;
            }
        case 8:
            questions.question8.userChoice = choicePick;
            if (choicePick == questions.question8.correctAnswer) {
                score += 2;
                return score;
            } else {
                timeLeft -= 20;
                return score;
            }
        case 9:
            questions.question9.userChoice = choicePick;
            if (choicePick == questions.question9.correctAnswer) {
                score += 1;
                return score;
            } else {
                timeLeft -= 20;
                return score;
            }
        case 10:
            questions.question10.userChoice = choicePick;
            if (choicePick == questions.question10.correctAnswer) {
                score += 2;
                return score;
            } else {
                timeLeft -= 20;
                return score;
            }
        default:
            break;
    }
}

function submitChoice() {
    // end quiz if time is up. The check is done here because it is the easiest place to do so.
    if (timeLeft <= 0) {
        gradeQuiz();
    } else {
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
        scoresDisplay.textContent = `Score: ${score}`;
    
        if (currentQuestion < 10) {
            let nextQuestion = currentQuestion += 1;
    
            viewQuestion(nextQuestion);
        } else {
            gradeQuiz();
        }
    }
}

function viewQuestion(questionNum) {

    console.log(timeLeft);

    mainContainer.style.display = 'block';
    submitChoiceBtn.style.display = 'block';
    resultsDisplay.style.visibility = 'hidden';

    console.log(`Current score: ${score}`);
    questionNumberDisplay.textContent = `Question ${currentQuestion}`;

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

    mainContainer.style.display = 'none';
    submitChoiceBtn.style.display = 'none';
    resultsDisplay.style.visibility = 'visible';
    highScoreListDisplay.style.display = 'block';

    switch (true) {
        case (score == 17):
            letterGrade = 'A+';
            letterGradeDisplay.textContent = `Perfect Score! ${score}pts out of 17pts. Grade: ${letterGrade}`;
            resultsDisplay.style.backgroundColor = 'lightgreen';
            resultsDisplay.style.color = 'black';
            break;
        case (score >= 13):
            letterGrade = 'A';
            letterGradeDisplay.textContent = `Great Job! ${score}pts out of 17pts. Grade: ${letterGrade}`;
            resultsDisplay.style.backgroundColor = 'lightgreen';
            resultsDisplay.style.color = 'black';
            break;
        case (score >= 10):
            letterGrade = 'B';
            letterGradeDisplay.textContent = `Not bad! ${score}pts out of 17pts. Grade: ${letterGrade}`;
            resultsDisplay.style.backgroundColor = 'green';
            resultsDisplay.style.color = 'white';
            break;
        case (score >= 7):
            letterGrade = 'C';
            letterGradeDisplay.textContent = `You did alright. ${score}pts out of 17pts. Grade: ${letterGrade}`;
            resultsDisplay.style.backgroundColor = 'lightyellow';
            resultsDisplay.style.color = 'black';
            break;
        case (score == 6):
            letterGrade = 'D';
            letterGradeDisplay.textContent = `You could have done better. ${score}pts out of 17pts. Grade: ${letterGrade}`;
            resultsDisplay.style.backgroundColor = 'brown';
            resultsDisplay.style.color = 'white';
            break;
        case (score <= 5):
            letterGrade = 'F';
            letterGradeDisplay.textContent = `You failed. ${score}pts out of 17pts. Grade: ${letterGrade}`;
            resultsDisplay.style.backgroundColor = 'red';
            resultsDisplay.style.color = 'white';
            break;
        default:
            break;
    }

    console.log(`Your Score: ${score} out of 17\nLetter Grade: ${letterGrade}`);
    updateHighScores(score);
}

function updateHighScores(scoreNum) {
    // adds score to list if it is not already on it, sorts best to worst, then stores it in storage:
    if (!highScores.includes(scoreNum)) {
        console.log(`unique score`);
        // add first 3 largest numbers of array to high score list:
        highScores.push(scoreNum);
        highScores.sort((a, b) => b -a)
        // store top 3 scores in local storage:
        localStorage.setItem(`highScores`, JSON.stringify(highScores.slice(0,3)));

        console.log(JSON.parse(localStorage.getItem(`highScores`)));
        displayScores();
    }   
}

function displayScores() {
    highScoreList = JSON.parse(localStorage.getItem(`highScores`));
    highScore1Display.textContent = highScoreList[0];
    highScore2Display.textContent = highScoreList[1];
    highScore3Display.textContent = highScoreList[2];
}

function clearHighScores() {
    localStorage.clear();
}

// clearHighScores();

submitChoiceBtn.addEventListener("click", submitChoice);

resetBtn.addEventListener('click', () => {
    // When reset button is clicked, reset values and currentQuestion to default beginning values.
    score = 0;
    scoresDisplay.textContent = `score: ${score}`;
    letterGrade = ``;
    letterGradeDisplay.textContent = letterGrade;
    timeLeft = 120;
    timerDisplay.textContent = timeLeft;
    timerDisplay.style.color = `green`;
    currentQuestion = 1;

    viewQuestion(1);
});

// toggle showing high score list on screen via `#view-high-scores` button
viewHighScoresBtn.addEventListener("click", () => {
    if (highScoreListDisplay.style.display == 'none') {
        highScoreListDisplay.style.display = 'block';
        viewHighScoresBtn.textContent = `Hide High Scores`;
        viewHighScoresBtn.style.backgroundColor = `#8d910c`;
    } else {
        highScoreListDisplay.style.display = 'none';
        viewHighScoresBtn.textContent = `View High Scores`;
        viewHighScoresBtn.style.backgroundColor = `#b2b419`;
    }
});

viewQuestion(1);

// Subtract 1 from total time left each second.
setInterval(() => {
    if (timeLeft > 0) {
        // minor color change to timer to signify low(er) on time
        if (timeLeft < 61) {
            timerDisplay.style.color = 'orange';
            if (timeLeft < 31) {
                timerDisplay.style.color = 'red';
            }
        }
        timeLeft--;
        timerDisplay.textContent = timeLeft;
    }
}, 1000)