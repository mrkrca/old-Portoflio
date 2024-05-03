
function landingTop(pointElement) {
let elemenetToScroll = document.getElementById(pointElement);
elemenetToScroll.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
})
}


const elements = document.getElementsByClassName('animation1');

for (let i = 0; i <= elements.length; i++) {
elements[i].addEventListener('animationend', function(e) {
    elements[i].classList.remove('animated');
});

elements[i].addEventListener('mouseover', function(e) {
elements[i].classList.add('animated')
})
}


const elements3 = document.getElementsByClassName('animation1');

for (let i = 0; i <= elements3.length; i++) {
elements3[i].addEventListener('animationend', function(e) {
elements3[i].classList.remove('animated');
});
elements3[i].addEventListener('mouseover', function(e) {
elements3[i].classList.add('animated')
})
}
              

const elements4 = document.getElementsByClassName('animation1');

for (let i = 0; i <= elements4.length; i++) {
elements4[i].addEventListener('animationend', function(e) {
    elements4[i].classList.remove('animated');
});

elements4[i].addEventListener('mouseover', function(e) {
elements4[i].classList.add('animated')
})
}


    function onclickgotop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        
    })
}
