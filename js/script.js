/* Shows nav element */

(function () {

    let nav = document.getElementsByClassName('navbar-nav')[0],
        navElement = nav.getElementsByTagName('li')[2],
        newNavElement = document.createElement('li');
    nav.insertBefore(newNavElement, navElement);

    let newNavLink = document.createElement('a');
    newNavLink.setAttribute('href', 'shows.html');
    newNavLink.setAttribute('class', 'nav-link logo');
    newNavLink.innerHTML = 'Выставки';
    newNavElement.appendChild(newNavLink);

})();

/* Slider */

let slideIndex = 1;
showSlides(slideIndex);


let plusSlide = () => showSlides(slideIndex += 1);


let minusSlide = () => showSlides(slideIndex -= 1);


let currentSlide = n => showSlides(slideIndex = n);

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("banner");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}
