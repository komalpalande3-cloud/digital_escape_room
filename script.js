const startButton = document.getElementById("startBtn");

startButton.addEventListener("click", function() {

    // Start a completely new game
    localStorage.setItem("score", "0");

    // Start a new timer
    localStorage.removeItem("escapeEndTime");

    // Go to Level 1
    window.location.href = "level1.html";

});s