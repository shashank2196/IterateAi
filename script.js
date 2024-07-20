// script.js
document.addEventListener('DOMContentLoaded', () => {
    const userProfile = document.querySelector('.user-profile');
    const dropdown = document.querySelector('.dropdown');

    userProfile.addEventListener('click', () => {
        dropdown.classList.toggle('show');
    });

    window.addEventListener('click', (e) => {
        if (!userProfile.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });
});
