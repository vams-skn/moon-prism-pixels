const questions = [
    {
        question: "Which element do you feel most connected to?",
        options: ["Fire", "Water", "Earth", "Air", "Light"],
    },
    {
        question: "What do you value most?",
        options: ["Friendship", "Courage", "Intelligence", "Love", "Justice"],
    },
    {
        question: "What type of power do you admire the most?",
        options: ["Healing", "Destruction", "Wisdom", "Strength", "Speed"],
    },
    {
        question: "How do you handle challenges?",
        options: ["With optimism", "With strategy", "With logic", "With passion", "With bravery"],
    },
    {
        question: "What is your favorite food?",
        options: ["Cake", "Pasta", "Salad", "Rice", "Fruit"],
    },
    {
        question: "What is your dream job?",
        options: ["Artist", "Leader", "Scientist", "Teacher", "Hero"],
    },
    {
        question: "What is your favorite season?",
        options: ["Spring", "Summer", "Fall", "Winter", "All"],
    },
    {
        question: "What is your favorite animal?",
        options: ["Cat", "Dog", "Bird", "Fish", "Rabbit"],
    },
    {
        question: "What is your favorite hobby?",
        options: ["Dancing", "Reading", "Sports", "Cooking", "Traveling"],
    },
    {
        question: "What is your ideal vacation?",
        options: ["Beach", "Mountains", "City", "Countryside", "Space"],
    },
];

const quizForm = document.getElementById('quiz-form');
const questionBox = document.getElementById('question-box');
const submitBtn = document.getElementById('submit-btn');

let useroptions = [];

function loadQuestions() {
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `<img style="height: 40px;" src="../../../assets/gifs/twinklingstar.gif"> <h3 style="margin:0; display: inline-block; font-family: 'Courier New';">${q.question}</h3>`;
        
        q.options.forEach((answer, i) => {
            questionDiv.innerHTML += `
                <label>
                    <input type="radio" name="question${index}" value="${answer}" required>
                    ${answer}
                </label>
            `;
        });
        
        questionBox.appendChild(questionDiv); // adding questions one by one
    });
}

function calculateResult() {
    const results = {
        "Venus": 0,
        "Mars": 0,
        "Mercury": 0,
        "Moon": 0,
        "Jupiter": 0,
    };
    
    for (let i = 0; i < questions.length; i++) {
        if (!quizForm[`question${i}`].value) {
            alert("please answer all the questions!"); // to check if all questions have been answered
            return;
        }
    }
    questions.forEach((_, index) => {
        const selectedAnswer = quizForm[`question${index}`].value;
        if (selectedAnswer) { // calculating likeness to each character
            if (["Light", "Love", "Healing", "Pasta", "Artist", "Cat", "Cooking"].includes(selectedAnswer)) results["Venus"]++;
            else if (["Fire", "Courage", "Destruction", "Rice", "Hero", "Bird"].includes(selectedAnswer)) results["Mars"]++;
            else if (["Water", "Intelligence", "Wisdom", "Salad", "Scientist", "Fish", "Reading"].includes(selectedAnswer)) results["Mercury"]++;
            else if (["Earth", "Friendship", "Strength", "Fruits", "Leader", "Rabbit", "Dancing"].includes(selectedAnswer)) results["Moon"]++;
            else if (["Air", "Justice", "Speed", "Cake", "Teacher", "Dog"].includes(selectedAnswer)) results["Jupiter"]++;
        }
    });

    const maxResult = Object.keys(results).reduce((a, b) => results[a] > results[b] ? a : b);
    window.location.href = `../../sites/quiz-result.html?sailor=${maxResult}`; // redirect to a customised results page
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault(); // to prevent form from submitting as normal
    calculateResult();
});

loadQuestions();