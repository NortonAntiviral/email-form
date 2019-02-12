// Variables
const sendBtn = document.getElementById('sendBtn');

// Event Listeners

eventListeners();

function eventListeners() {
    //App init
    document.addEventListener('DOMContentLoaded', appInit);
}

// Functions

// App Initialization
function appInit() {
    // disable send button on load
    sendBtn.disabled = true;

}