document.addEventListener("DOMContentLoaded", function() {
    let timeLeft = 30; // Initial Time = 30sec
    const timerDisplay = document.getElementById("timer");
    const addTimeButton = document.getElementById("add-time");
    const startTimerButton = document.getElementById("start-timer");
    const alarm= document.getElementById("alarm");
    let timerInterval = null;

    function formatTime(seconds) {
        const minutes = Math.floor(seconds/60);
        const secs = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    timerDisplay.textContent = formatTime(timeLeft);

    function startTimer () { // Start Timer
        if (timerInterval) clearInterval(timerInterval);  // Clear used Timer
        timerInterval = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = formatTime(timeLeft);
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                alarm.play();
            }
        }, 1000);
    }

    function resetTimer () { // Reset the timer to 30sec
        timeLeft = 30;
        timerDisplay.textContent = formatTime(timeLeft);
    }

    addTimeButton.addEventListener("click", () => { // Add Time
        timeLeft += 30; // Add 30sec
        timerDisplay.textContent = formatTime(timeLeft);
        startTimer(); // Restart Timer
    });

    startTimerButton.addEventListener("click", () => {
        resetTimer(); // Reset Timer
        startTimer(); // Restart Timer
    });
});