
// Countdown Timer
const countdownTimer = document.getElementById('countdown-timer');
const birthdayDate = new Date('2024-12-17T00:00:00');

function updateCountdown() {
    const now = new Date();
    const diff = birthdayDate - now;

    if (diff <= 0) {
        countdownTimer.textContent = "🎉 It's Today! 🎉";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdownTimer.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
