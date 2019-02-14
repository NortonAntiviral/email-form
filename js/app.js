// Variables
const sendBtn = document.getElementById('sendBtn'),
    email = document.getElementById('email'),
    subject = document.getElementById('subject'),
    message = document.getElementById('message');

// Event Listeners

eventListeners();

function eventListeners() {
    //App init
    document.addEventListener('DOMContentLoaded', appInit);

    // Validate the forms
    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField);
}

// Functions

// App Initialization
function appInit() {
    // disable send button on load
    sendBtn.disabled = true;

}

// Validate the fields
function validateField() {
    let errors;

    //Validate the lenth of the field
    validateLength(this);

    // Validate the email
    // console.log(this);
    if(this.type === 'email') {
        validateEmail(this);
    }
}

// Validate the lenth of the fields
function validateLength(field) {
    if(field.value.length > 0) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}

// Validate email checks @ symbol
function validateEmail(field) {
    let emailText = field.value;
    // checks for @ sign
    if(emailTextindexOf('@' && '.') !== -1) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    
    }
}