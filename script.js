// JavaScript Mini-Game: Data Types and Conversion

// Array of questions, answers, and explanations
const rounds = [
    {
        question: "Round 1: What will '5' + 2 result in? (Hint: It's type coercion!)",
        options: {
            A: "'52' (string)",
            B: "7 (number)"
        },
        correctAnswer: 'A',
        explanation: "The result is '52' because JavaScript coerces the number 2 into a string and concatenates them."
    },
    {
        question: "Round 2: What will true + 1 result in?",
        options: {
            A: "2 (number)",
            B: "'true1' (string)"
        },
        correctAnswer: 'A',
        explanation: "The result is 2 because JavaScript converts true to 1, and 1 + 1 = 2."
    },
    {
        question: "Round 3: What happens if we convert the string '10' to a number using Number('10')?",
        options: {
            A: "10 (number)",
            B: "'10' (string)"
        },
        correctAnswer: 'A',
        explanation: "The result is 10 because we explicitly converted the string '10' into a number."
    },
    {
        question: "Round 4: What happens if we add an empty string to the number 100?",
        options: {
            A: "'100' (string)",
            B: "100 (number)"
        },
        correctAnswer: 'A',
        explanation: "The result is '100' (a string). JavaScript coerces the number into a string when concatenated with an empty string."
    },
    {
        question: "Round 5: What happens when we add false to an empty string?",
        options: {
            A: "'false' (string)",
            B: "0 (number)"
        },
        correctAnswer: 'A',
        explanation: "The result is 'false' (a string). JavaScript coerces the boolean into a string when concatenated with an empty string."
    },
    {
        question: "Round 6: What happens when we convert null to a number using Number(null)?",
        options: {
            A: "0 (number)",
            B: "null (still null)"
        },
        correctAnswer: 'A',
        explanation: "The result is 0 because null is coerced to the number 0 when converted."
    }
];

// Game variables
let currentRound = 0;

// Function to display the next round/question
function nextRound() {
    if (currentRound < rounds.length) {
        const round = rounds[currentRound];
        document.getElementById("question").innerText = round.question;
        document.querySelector(".option:nth-child(1)").innerText = `A. ${round.options.A}`;
        document.querySelector(".option:nth-child(2)").innerText = `B. ${round.options.B}`;
        document.getElementById("result").innerText = "";
        document.getElementById("nextBtn").classList.add("hidden");
    } else {
        // Game over, show the final message
        document.getElementById("question").innerText = "Congrats! You've completed the game!";
        document.querySelector(".options").classList.add("hidden");
        document.getElementById("result").innerText = "Thank you for playing!";
        document.getElementById("nextBtn").classList.add("hidden");
    }
}

// Function to check the player's answer
function checkAnswer(selectedOption) {
    const round = rounds[currentRound];
    const resultDiv = document.getElementById("result");

    if (selectedOption === round.correctAnswer) {
        resultDiv.innerText = `Correct! ${round.explanation}`;
    } else {
        resultDiv.innerText = `Incorrect! ${round.explanation}`;
    }

    document.getElementById("nextBtn").classList.remove("hidden");
    currentRound++;
}

// Start the game
nextRound();
