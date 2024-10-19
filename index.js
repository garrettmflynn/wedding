 const DATE = 'August 29, 2025 20:30:00 UTC'
 
 // Function to calculate and display the countdown
 function updateCountdown() {
    const targetDate = new Date(DATE).getTime();
    const now = new Date().getTime();
    const timeDifference = targetDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Display the result
    const countdownElement = document.getElementById('countdown');
    const info = []
    const hasDays = days > 0;
    const hasHours = hours > 0;
    const hasMinutes = minutes > 0;
    const hasSeconds = seconds > 0;
        
    if (hasDays) info.push(`${days} days`);
    if (hasHours || hasDays) info.push(`${hours} hours`);
    if (hasMinutes || hasHours) info.push(`${minutes} minutes`);
    if (hasSeconds || hasMinutes) info.push(`${seconds} seconds`);
    
    if (timeDifference > 0) {
        const mainInfo = info[0]
        countdownElement.innerHTML = `
            <span>Only ${mainInfo} left!</span>
            <small>${info.slice(1).join(', ')}</small>
        `;

    } else {
      countdownElement.innerHTML = 'The date has arrived!';
    }
  }

  // Update the countdown every second
  setInterval(updateCountdown, 1000);

  updateCountdown()