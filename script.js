// Get elements
const playButton = document.querySelector('.play');
const pauseButton = document.querySelector('.pause');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const progress = document.querySelector('.progress');
const currentTime = document.querySelector('.current-time');
const totalTime = document.querySelector('.total-time');
const volumeSlider = document.querySelector('.volume-slider');
const muteButton = document.querySelector('.mute');

// Define the audio source
let audio = new Audio('your-audio-file.mp3'); 

// Event listeners for play/pause/next/prev buttons
playButton.addEventListener('click', () => {
    audio.play();
    // Update UI elements to reflect the playing state
});

pauseButton.addEventListener('click', () => {
    audio.pause();
    // Update UI elements to reflect the paused state
});

nextButton.addEventListener('click', () => {
    // Implement logic to play the next track
});

prevButton.addEventListener('click', () => {
    // Implement logic to play the previous track
});

// Event listener for volume slider
volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value / 100;
    // Update mute button based on volume level
});

// Event listener for mute button
muteButton.addEventListener('click', () => {
    if (audio.muted) {
        audio.muted = false;
        // Update the mute button icon
    } else {
        audio.muted = true;
        // Update the mute button icon
    }
});

// Update progress bar and time display
audio.addEventListener('timeupdate', () => {
    const percentage = (audio.currentTime / audio.duration) * 100;
    progress.style.width = `${percentage}%`;
    currentTime.textContent = formatTime(audio.currentTime);
});

// Set total time when audio is ready
audio.addEventListener('loadedmetadata', () => {
    totalTime.textContent = formatTime(audio.duration);
});

// Function to format time (optional)
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}