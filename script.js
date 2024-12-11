// Toggle hamburger menu
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
}

// Toggle About Me section
function toggleAbout() {
    const aboutShort = document.getElementById('about-short');
    const aboutFull = document.getElementById('about-full');
    if (aboutFull.style.display === 'none') {
        aboutShort.style.display = 'none';
        aboutFull.style.display = 'block';
    } else {
        aboutShort.style.display = 'block';
        aboutFull.style.display = 'none';
    }
}
