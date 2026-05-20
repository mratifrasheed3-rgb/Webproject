document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.getElementById('navToggle');
    const navbarMenu = document.getElementById('navbarMenu');

    if (navToggle && navbarMenu) {
        navToggle.addEventListener('click', () => {
            console.log("Toggle button clicked successfully!"); // 👈 Debug check
            navToggle.classList.toggle('open');   // Hamburger ko 'X' banayega
            navbarMenu.classList.toggle('show');  // Dropdown list ko show/hide karein
        });
    } else {
        console.error("HTML Elements missing: Check if IDs are correct!");
    }
});