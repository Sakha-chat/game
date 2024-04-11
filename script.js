// Function to display the task of the day
function displayTaskOfTheDay() {
    // Get the current date
    const currentDate = new Date();
    // Get the day of the year (1 to 365/366)
    const dayOfYear = getDayOfYear(currentDate);

    // Calculate index of the task for the day
    const taskIndex = (dayOfYear - 1) % tasks.length;

    // Display the task
    const taskContainer = document.getElementById("task-container");
    taskContainer.innerHTML = "<p>" + tasks[taskIndex] + "</p>";
}

// Function to get the day of the year
function getDayOfYear(date) {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

// Function to handle task completion
function markTaskCompleted() {
    // Show alert message for completion
    alert("Task Completed!");

    // Display timer for next task
    displayNextTaskTimer();
}

// Function to display timer for the next task
function displayNextTaskTimer() {
    const timerContainer = document.getElementById("timer-container");
    timerContainer.innerHTML = "<p>Next task will be available in 10 seconds...</p>";

    // Set timer to display next task after 10 seconds
    setTimeout(function() {
        window.location.href = "c2.html";
    }, 10000);
}

// Check if JavaScript is enabled
document.addEventListener("DOMContentLoaded", function() {
    // Display task of the day if JavaScript is enabled
    displayTaskOfTheDay();

    // Attach click event listener to the task completed button
    const taskCompletedButton = document.getElementById("taskCompletedButton");
    taskCompletedButton.addEventListener("click", markTaskCompleted);
});
