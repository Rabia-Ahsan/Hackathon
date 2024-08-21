function startQuiz() {
    window.location.href = 'start-quiz.html'; // Replace with your quiz start page URL
}

function showInstructions() {
    const columns = document.querySelectorAll('.column');
    columns.forEach((column, index) => {
        setTimeout(() => {
            column.classList.add('show');
        }, index * 500); // Staggered reveal effect
    });
}
