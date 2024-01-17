// main.js

document.addEventListener("DOMContentLoaded", function() {
    // Set a timeout to fade in the landing page content after a delay
    setTimeout(function() {
      document.getElementById("initial-image").style.opacity = "0";
      document.querySelector(".landing-section").style.opacity = "1";
    }, 3000); // Adjust the delay (in milliseconds) based on your preference
  });
