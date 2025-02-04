// JavaScript for Light/Dark Mode Toggle
const themeButton = document.getElementById('theme-button');
const darkThemeClass = 'dark-theme';
const iconMoon = '🌙';
const iconSun = '☀️';

// Check previously selected theme from localStorage
const selectedTheme = localStorage.getItem('selected-theme');

// Apply previously selected theme
if (selectedTheme) {
    document.body.classList.toggle(darkThemeClass, selectedTheme === 'dark');
    themeButton.textContent = selectedTheme === 'dark' ? iconSun : iconMoon;
}

// Toggle theme on button click
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkThemeClass);
    
    // Save the user's preference in localStorage
    const currentTheme = document.body.classList.contains(darkThemeClass) ? 'dark' : 'light';
    localStorage.setItem('selected-theme', currentTheme);

    // Toggle button icon
    themeButton.textContent = currentTheme === 'dark' ? iconSun : iconMoon;
});
