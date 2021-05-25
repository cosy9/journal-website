//hamburger menu
var navbar = document.querySelector('.nav-list')
var ham = document.querySelector('.hambur')
    // toggles hamburger menu in and out when clicking on the hamburger
function toggleHamburger() {
    navbar.classList.toggle('display')
    ham.classList.toggle('active')
}

ham.addEventListener('click', toggleHamburger)

// toggle when clicking on links

// METHOD 1
var menuLinks = document.querySelectorAll('.nav-list li')
menuLinks.forEach(function(menuLink) {
    menuLink.addEventListener('click', toggleHamburger)
})


//for slide to top {
var gotoTop = document.getElementsByClassName("top")[0];
var backTop = function() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}
gotoTop.addEventListener('click', backTop)
gotoTop.addEventListener('click', function(event) { event.preventDefault() })