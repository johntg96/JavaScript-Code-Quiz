// event listeners

const questionDisplay = document.querySelector("#question");
const choicesDisplay = document.querySelector("#choices");
const choice1 = document.querySelector("#choice_1");
const choice2 = document.querySelector("#choice_2");
const choice3 = document.querySelector("#choice_3");
const choice4 = document.querySelector("#choice_4");

const questions = {
    question1: {
        question: "How much wood can a woodchuck chuck?",
        choices: ["a lot", "some", "not enough", "as much wood as a woodchuck could"],
        correctAnswer: "as much wood as a woodchuck could"
    },
    question2: {
        question: "question 2 will go here",
        choices: ["first choice", "second choice", "third choice", "fourth choice"],
        correctAnswer: "first choice"
    },
    question3: {
        question: "question 3 will go here",
        choices: ["first choice", "second choice", "third choice", "fourth choice"],
        correctAnswer: "first choice"
    },
    question4: {
        question: "question 4 will go here",
        choices: ["first choice", "second choice", "third choice", "fourth choice"],
        correctAnswer: "first choice"
    },
    question5: {
        question: "question 5 will go here",
        choices: ["first choice", "second choice", "third choice", "fourth choice"],
        correctAnswer: "first choice"
    },
    question6: {
        question: "question 6 will go here",
        choices: ["first choice", "second choice", "third choice", "fourth choice"],
        correctAnswer: "first choice"
    },
    question7: {
        question: "question 7 will go here",
        choices: ["first choice", "second choice", "third choice", "fourth choice"],
        correctAnswer: "first choice"
    },
    question8: {
        question: "question 8 will go here",
        choices: ["first choice", "second choice", "third choice", "fourth choice"],
        correctAnswer: "first choice"
    },
    question9: {
        question: "question 9 will go here",
        choices: ["first choice", "second choice", "third choice", "fourth choice"],
        correctAnswer: "first choice"
    },
    question10: {
        question: "question 10 will go here",
        choices: ["first choice", "second choice", "third choice", "fourth choice"],
        correctAnswer: "first choice"
    },
}

console.log(questions.question1.correctAnswer); // displays correct answer to question 1, etc.
console.log(questions.question9.choices);