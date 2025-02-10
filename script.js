// Selecting the elements
const submitButton = document.getElementById('submitPromise');
const promiseInput = document.getElementById('userPromise');
const promiseDisplay = document.getElementById('promiseDisplayText');

// Event listener for typing in the promise input
promiseInput.addEventListener('input', () => {
    if (promiseInput.value.trim() !== "") {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});

// Event listener for the Submit Promise button
submitButton.addEventListener('click', () => {
    const userPromise = promiseInput.value.trim();
    
    // Display the user's promise
    promiseDisplay.textContent = `"I promise to: ${userPromise}"`;
    promiseDisplay.style.opacity = 1;
    
    // Trigger confetti animation
    triggerConfetti();
    
    // Clear input and disable button after submitting
    promiseInput.value = '';
    submitButton.disabled = true;
});

// Confetti Effect
function triggerConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDuration = `${Math.random() * 1.5 + 1}s`;
        document.body.appendChild(confetti);
        
        // Remove confetti after animation ends
        setTimeout(() => {
            confetti.remove();
        }, 2000);
    }
}
