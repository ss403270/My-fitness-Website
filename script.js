// Toggle About Me section
function toggleAbout() {
    const aboutShort = document.getElementById('about-short');
    const aboutFull = document.getElementById('about-full');
    const toggleButton = document.getElementById('about-toggle');

    if (aboutFull.style.display === 'none') {
        aboutShort.style.display = 'none';
        aboutFull.style.display = 'block';
        toggleButton.textContent = 'Read Less';
    } else {
        aboutShort.style.display = 'block';
        aboutFull.style.display = 'none';
        toggleButton.textContent = 'Read More';
    }
}
