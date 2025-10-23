// Wait for the entire page to load before running the script
document.addEventListener("DOMContentLoaded", function() {

    // --- FEATURE 1: TYPING EFFECT ---
    const words = ["Developer", "Student", "Creator"];
    let i = 0; // Current word index
    let j = 0; // Current letter index
    let currentWord = "";
    let isDeleting = false;
    const typingElement = document.getElementById("typing-effect");

    function type() {
        currentWord = words[i];
        if (isDeleting) {
            // Remove letter
            typingElement.textContent = currentWord.substring(0, j - 1);
            j--;
            if (j === 0) {
                isDeleting = false;
                i++; // Move to the next word
                if (i === words.length) {
                    i = 0; // Loop back to the first word
                }
            }
        } else {
            // Add letter
            typingElement.textContent = currentWord.substring(0, j + 1);
            j++;
            if (j === currentWord.length) {
                isDeleting = true;
                // Wait a bit before deleting
                setTimeout(type, 2000); 
                return;
            }
        }
        // How fast it types
        setTimeout(type, 150); 
    }
    type(); // Start the typing effect


    // --- FEATURE 2: STICKY NAVIGATION BAR ---
    const navbar = document.getElementById("navbar");
    // Get the initial position of the navbar
    const stickyOffset = navbar.offsetTop; 

    window.onscroll = function() {
        // window.pageYOffset is how far you've scrolled
        if (window.pageYOffset > stickyOffset) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    };


    // --- FEATURE 3: DARK MODE TOGGLE ---
    const toggleButton = document.getElementById("dark-mode-toggle");
    const icon = toggleButton.querySelector('i');
    
    toggleButton.onclick = function() {
        document.body.classList.toggle("dark-mode");

        // NEW: Change the icon from moon to sun
        if (document.body.classList.contains("dark-mode")) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        } else {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }
    }

});