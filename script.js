// JavaScript for SkillBridge Platform

// Function to handle "Get Started" button click
document.getElementById('get-started').addEventListener('click', function () {
  window.location.href = 'login.html';
});

  
  // Placeholder for dynamic features
  // Example: Loading task data dynamically (to be integrated with backend later)
  function loadTasks() {
    console.log("Loading tasks... (placeholder for future dynamic content)");
    // Fetch tasks from backend API (to be added later)
  }
  
  // Placeholder for user progress tracking
  function trackUserProgress() {
    console.log("Tracking user progress... (to be implemented)");
  }
  
  // Initialize the application
  function initialize() {
    console.log("SkillBridge application initialized.");
    loadTasks(); // Load tasks dynamically
    trackUserProgress(); // Setup progress tracking
  }
  
  // Run initialize function when the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", initialize);
  // JavaScript for SkillBridge Platform


  
