// Toggle the hamburger menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Toggle the "About Me" full content
function toggleAbout() {
    const moreContent = document.getElementById('more-about');
    const button = document.querySelector('#about button');
    if (moreContent.style.display === 'none') {
        moreContent.style.display = 'inline';
        button.textContent = 'Read Less';
    } else {
        moreContent.style.display = 'none';
        button.textContent = 'Read More';
    }
}
