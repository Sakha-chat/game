// Function to fetch and display global time
function fetchGlobalTime() {
    fetch('http://worldtimeapi.org/api/ip')
        .then(response => response.json())
        .then(data => {
            const time = new Date(data.datetime);
            document.getElementById('timer-container').innerHTML = "Global Time: " + time.toLocaleString();
        })
        .catch(error => {
            console.error('Error fetching global time:', error);
        });
}

// Update the timer display every second
function updateTimer() {
    // Set the target date to tomorrow at 4:00 AM
    var targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 1);
    targetDate.setHours(4, 0, 0, 0);

    // Update the timer display every second
    var timerInterval = setInterval(function() {
        // Get the current time
        var currentTime = new Date().getTime();

        // Calculate the remaining time
        var remainingTime = targetDate - currentTime;

        // Calculate hours, minutes, and seconds
        var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        // Display the timer
        document.getElementById("timer-container").innerHTML = "Next task in: " + hours + "h " + minutes + "m " + seconds + "s";
        document.getElementById("shareButton").style.display = "block";

        // If the timer ends, show the "Take me to next challenge" button
        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            document.getElementById("goToNextChallengeButton").style.display = "block";
        }
    }, 1000);
}

// Export the functions for external use
export { fetchGlobalTime, updateTimer };
