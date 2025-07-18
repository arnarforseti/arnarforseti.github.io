// Dynamic Greeting Based on Time of Day
function setGreeting() {
    const hour = new Date().getHours();
    const greetingElement = document.getElementById('greeting');
    let greeting;

    if (hour < 12) {
        greeting = 'Good Morning!';
    } else if (hour < 18) {
        greeting = 'Good Afternoon!';
    } else {
        greeting = 'Good Evening!';
    }

    greetingElement.textContent = `${greeting} I'm Your Name, welcome to my links!`;
}

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode')
        ? 'Switch to Light Mode'
        : 'Switch to Dark Mode';
});

// Button Click Animation
const buttons = document.querySelectorAll('.link-btn');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
            window.location.href = button.href; // Navigate after animation
        }, 200);
    });
});

// Smooth Scroll (for future sections if added)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize Greeting and Theme
setGreeting();
if (!document.body.classList.contains('light-mode')) {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = 'Switch to Light Mode';
}
