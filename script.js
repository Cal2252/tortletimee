let countdownInterval;

function nextQuestion(isYes) {
    if (isYes) {
        document.getElementById("question-container").style.display = "none";
        document.getElementById("second-question-container").style.display = "block";
    } else {
        showBrokenHeart();
    }
}

function showBrokenHeart() {
    document.getElementById("question-container").style.display = "none";
    document.getElementById("second-question-container").style.display = "none";
    document.getElementById("heart-container").style.display = "block";
}

function showCountdown() {
    document.getElementById("second-question-container").style.display = "none";
    document.getElementById("input-container").style.display = "block";
}

function resetQuestions() {
    document.getElementById("heart-container").style.display = "none";
    document.getElementById("question-container").style.display = "block";
}

function startCountdown() {
    clearInterval(countdownInterval);
    const dateInput = document.getElementById("dateInput").value;
    const targetDate = new Date(dateInput).getTime();
    
    if (isNaN(targetDate)) {
        document.getElementById("countdown").innerHTML = "Please enter a valid date.";
        return;
    }

    document.getElementById("input-container").style.display = "none";
    document.getElementById("countdown-container").style.display = "block";

    countdownInterval = setInterval(function() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;
        
        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            document.getElementById("countdown").innerHTML = "Time is up! Days left until we're together!";
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const countdownText = `${days} days left until we're together!`;
        document.getElementById("countdown").innerHTML = countdownText;
    }, 1000);
}
