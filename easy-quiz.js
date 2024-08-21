const questions = [
    {
        question: "What is the largest planet in our Solar System?",
        options: ["Earth", "Jupiter", "Mars", "Saturn"],
        answer: "Jupiter",
        explanation: "Jupiter is the largest planet in our Solar System, with a diameter of about 86,881 miles (139,822 kilometers)."
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Earth", "Mars", "Mercury"],
        answer: "Mars",
        explanation: "Mars is called the Red Planet because of its reddish appearance, which is due to iron oxide (rust) on its surface."
    },
    {
        question: "What is the closest star to Earth?",
        options: ["Sirius", "Proxima Centauri", "Alpha Centauri", "Betelgeuse"],
        answer: "Proxima Centauri",
        explanation: "Proxima Centauri is the closest known star to the Sun, located approximately 4.24 light-years away."
    },
    {
        question: "Which planet has the most extensive rings?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        answer: "Saturn",
        explanation: "Saturn has the most prominent and complex ring system of any planet in the Solar System."
    },
    {
        question: "What is the hottest planet in our Solar System?",
        options: ["Mercury", "Venus", "Mars", "Jupiter"],
        answer: "Venus",
        explanation: "Venus is the hottest planet due to its thick atmosphere of carbon dioxide, which traps heat through the greenhouse effect."
    },
    {
        question: "Which planet is known for its Great Red Spot?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter",
        explanation: "Jupiter’s Great Red Spot is a massive storm that has been ongoing for over 350 years."
    },
    {
        question: "What is the largest moon of Saturn called?",
        options: ["Titan", "Ganymede", "Callisto", "Io"],
        answer: "Titan",
        explanation: "Titan is Saturn's largest moon and is even larger than the planet Mercury."
    },
    {
        question: "Which planet is known for its extreme tilt, causing extreme seasons?",
        options: ["Mars", "Uranus", "Neptune", "Saturn"],
        answer: "Uranus",
        explanation: "Uranus has an axial tilt of 98 degrees, causing extreme seasonal variations."
    },
    {
        question: "Which planet is famous for its blue color?",
        options: ["Neptune", "Uranus", "Earth", "Venus"],
        answer: "Neptune",
        explanation: "Neptune is known for its striking blue color, which is due to the presence of methane in its atmosphere."
    },
    {
        question: "What is the name of the first human-made satellite to orbit Earth?",
        options: ["Apollo 11", "Voyager 1", "Sputnik 1", "Hubble Space Telescope"],
        answer: "Sputnik 1",
        explanation: "Sputnik 1 was the first artificial Earth satellite, launched by the Soviet Union in 1957."
    }
];
let currentQuestionIndex = parseInt(localStorage.getItem('currentQuestionIndex')) || 0;
let score = parseInt(localStorage.getItem('score')) || 0;
let timer;

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }

    const questionData = questions[currentQuestionIndex];
    document.getElementById('question').textContent = questionData.question;

    const optionsContainer = document.querySelector('.options-container');
    optionsContainer.innerHTML = '';

    questionData.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        optionElement.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(optionElement);
    });

    document.getElementById('feedback').style.display = 'none';
    startTimer();

    document.getElementById('completeBtn').style.display = currentQuestionIndex === questions.length - 1 ? 'inline-block' : 'none';
    document.getElementById('score').textContent = score;
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    const feedback = document.getElementById('feedback');
    clearInterval(timer);
    
    if (selectedOption === correctAnswer) {
        score++;
        feedback.innerHTML = `<p>Correct! ${questions[currentQuestionIndex].explanation}</p>`;
    } else {
        feedback.innerHTML = `<p>Wrong! The correct answer is <strong>${correctAnswer}</strong>. ${questions[currentQuestionIndex].explanation}</p>`;
    }
    
    feedback.style.display = 'block';

    // Save progress
    localStorage.setItem('currentQuestionIndex', currentQuestionIndex);
    localStorage.setItem('score', score);
}

function nextQuestion() {
    currentQuestionIndex++;
    localStorage.setItem('currentQuestionIndex', currentQuestionIndex);
    loadQuestion();
}

function skipQuestion() {
    nextQuestion();
}

function startTimer() {
    let timeLeft = 10;
    document.getElementById('timer').textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function showResults() {
    // Save final score
    localStorage.setItem('score', score);
    // Redirect to the score page
    window.location.href = 'score-card.html';
}

document.getElementById('nextBtn').onclick = nextQuestion;
document.getElementById('skipBtn').onclick = skipQuestion;
document.getElementById('completeBtn').onclick = showResults;

loadQuestion();
