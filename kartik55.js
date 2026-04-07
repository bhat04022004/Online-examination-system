document.addEventListener("DOMContentLoaded", function() {
    // Handle login form submission
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();
        // For simplicity, just redirect to exam page
        window.location.href = "kartik44.html";
    });

    // Handle exam form submission
    document.getElementById("examForm").addEventListener("submit", function(event) {
        event.preventDefault();
        // Check answers and calculate score
        let score = 0;
        const totalQuestions = 1; // Adjust this based on the number of questions
        const q1 = document.querySelector('input[name="q1"]:checked');
        if (q1 && q1.value === "Paris") score++;
        // Add checks for other questions similarly

        // Store score in localStorage and redirect to result page
        localStorage.setItem("score", score);
        localStorage.setItem("totalQuestions", totalQuestions);
        window.location.href = "kartik44.html";
    });

    // Display result on result page
    if (window.location.pathname.endsWith("kartik44.html")) {
        const score = localStorage.getItem("score");
        const totalQuestions = localStorage.getItem("totalQuestions");
        const resultText = `You scored ${score} out of ${totalQuestions}`;
        document.getElementById("resultText").innerText = resultText;
    }
});
