function updateDateTime() {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    
    if (!timeElement || !dateElement) return;

    const now = new Date();
    
    // Time in American format (e.g., 10:14 AM)
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    
    timeElement.textContent = `${hours}:${minutes} ${ampm}`;
    
    // Date in American format (e.g., 6/29/2026)
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const year = now.getFullYear();
    
    dateElement.textContent = `${month}/${day}/${year}`;
}

document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    if (startButton) {
        startButton.addEventListener('click', () => {
            console.log('Menu iniciar aberto/fechado');
        });
    }

    // Initialize and set interval for date and time
    updateDateTime();
    setInterval(updateDateTime, 1000);
});
