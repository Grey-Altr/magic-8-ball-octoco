/* Imports */

/* Get DOM Elements */
const questionSection = document.getElementById('question-section');
const submitButton = document.getElementById('submit-button');
const ballAnswer = document.getElementById('ball-answer');
const toy = document.getElementById('toy');
/* State */

/* Events */

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)

// js below for ball from https://codepen.io/finnhvman/pen/wrLPJz
function validateBall() {
    const randomId = Math.floor(Math.random() * 20);
    document.getElementById(randomId).checked = true;
}
