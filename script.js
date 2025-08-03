// Tab switching functionality
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.add('hidden'));

        button.classList.add('active');
        const tabId = button.getAttribute('data-tab') + 'Tab';
        document.getElementById(tabId).classList.remove('hidden');
    });
});

// Settings button handler
document.getElementById('settingsBtn').addEventListener('click', () => {
    alert('Settings would open here in a real implementation');
});

// Pause tracking button handler
document.getElementById('pauseTrackingBtn').addEventListener('click', function () {
    const isPaused = this.textContent.trim() === 'Resume';
    this.textContent = isPaused ? 'Pause' : 'Resume';

    const icon = this.querySelector('svg');
    icon.innerHTML = isPaused
        ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />'
        : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />';

    alert(`Time tracking ${isPaused ? 'resumed' : 'paused'}`);
});

// Simulate updating time (in a real extension, this would come from background.js)
function updateSessionTime() {
    const sessionElement = document.querySelector('.border-t div span:last-child');
    let [hours, minutes] = sessionElement.textContent.split(':').map(Number);

    minutes += 1;
    if (minutes >= 60) {
        hours += 1;
        minutes = 0;
    }

    sessionElement.textContent = `${hours}h ${minutes}m`;
}

// Update session time every minute (demo only)
setInterval(updateSessionTime, 60000);
