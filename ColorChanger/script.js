// Array of colors
const colors = ["#3498db", "#e74c3c", "#2ecc71", "#f39c12"];

// Function to change color
function changeColor() {
    // Get a random color from the colors array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Change the background color of the clicked box
    this.style.backgroundColor = randomColor;
}

// Select all color boxes
const colorBoxes = document.querySelectorAll('.color-box');

// Add click event listeners to each color box
colorBoxes.forEach(box => {
    box.addEventListener('click', changeColor);
});
