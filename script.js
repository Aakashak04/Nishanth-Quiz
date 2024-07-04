let currentPage = 1;
const totalPages = 5;  // Adjust based on the total number of pages

function showPage(pageNumber) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');
    document.getElementById(`page-${pageNumber}`).style.display = 'block';
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
}

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

function calculateScore() {
    let score = 0;

    // Question 1
    if (document.getElementById('q1').value.toLowerCase() === 'paris') score++;

    // Question 2
    if (document.getElementById('q2a').checked && document.getElementById('q2c').checked &&
        !document.getElementById('q2b').checked) score++;

    // Question 3
    if (document.getElementById('q3b').checked) score++;

    // Question 4
    if (document.getElementById('q4').value === 'Jupiter') score++;

    // Question 5
    if (document.getElementById('q5').value.toLowerCase() === 'shakespeare') score++;

    // Question 6
    if (document.getElementById('q6').value === '4') score++;

    // Question 7
    if (document.getElementById('q7a').checked && document.getElementById('q7b').checked &&
        !document.getElementById('q7c').checked) score++;

    // Question 8
    if (document.getElementById('q8c').checked) score++;

    // Question 9
    if (document.getElementById('q9').value === 'Australia') score++;

    // Question 10
    if (document.getElementById('q10').value === '299792458') score++;

    document.getElementById('score').innerText = `You scored ${score} out of 10`;
    document.getElementById('result-popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('result-popup').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    showPage(currentPage);
    // Optional: Implement timer logic here
});
