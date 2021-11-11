//Slideshow functionality

const prev = document.getElementById('button_left');
const next = document.getElementById('button_right');
const figure = document.getElementById('slideshow');
const images = document.getElementsByClassName('slideshow-img');

let index = 0;

prev.addEventListener('click', () => {nextImage('prev')});
next.addEventListener('click', () => {nextImage('next')});

function nextImage(direction) {
  
  if(direction == 'next') {
    index++;
    if(index == images.length) {
      index = 0;
    }
  } else {
    if(index == 0) {
      index = images.length - 1;
    } else {
      index--;
    }
  }

  figure.style.transform = "translateX(-" + index * 100 + "%)";
  
};