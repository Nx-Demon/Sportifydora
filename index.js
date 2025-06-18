document.addEventListener('DOMContentLoaded', () => {
    const signupBtn = document.getElementById('signupBtn');
    const signinBtn = document.getElementById('signinBtn');
    const signupModal = document.getElementById('signupModal');
    const signinModal = document.getElementById('signinModal');
    const closeSignup = document.getElementById('closeSignup');
    const closeSignin = document.getElementById('closeSignin');

    // Open modals
    signupBtn.addEventListener('click', () => {
        signupModal.style.display = 'block';
    });

    signinBtn.addEventListener('click', () => {
        signinModal.style.display = 'block';
    });

    // Close modals
    closeSignup.addEventListener('click', () => {
        signupModal.style.display = 'none';
    });

    closeSignin.addEventListener('click', () => {
        signinModal.style.display = 'none';
    });

    // Close modal when clicking outside modal content
    window.addEventListener('click', (event) => {
        if (event.target === signupModal) {
            signupModal.style.display = 'none';
        }
        if (event.target === signinModal) {
            signinModal.style.display = 'none';
        }
    });

    // Handle signup form submission
    const signupForm = document.getElementById('signupForm');
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Signup successful! (This is a demo, no backend connected)');
        signupModal.style.display = 'none';
        signupForm.reset();
    });

    // Handle signin form submission
    const signinForm = document.getElementById('signinForm');
    signinForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Signin successful! (This is a demo, no backend connected)');
        signinModal.style.display = 'none';
        signinForm.reset();
    });
});
