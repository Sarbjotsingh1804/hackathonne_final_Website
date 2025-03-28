function countdownTimer() {
    const endDate = new Date("April 17, 2025 23:59:59").getTime();
    const timer = setInterval(function () {
        const now = new Date().getTime();
        const timeLeft = endDate - now;
        
        if (timeLeft < 0) {
            clearInterval(timer);
            document.querySelector(".countdown").innerHTML = "<h2>Registration Closed</h2>";
            return;
        }
        
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    }, 1000);
}

countdownTimer();