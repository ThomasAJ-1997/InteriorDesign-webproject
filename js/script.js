const cursor = document.querySelector('.cursor');
const cursor2 = document.querySelector('.cursor2');

document.addEventListener('mousemove', function (event) {
  cursor.style.cssText = cursor2.style.cssText =
    'left: ' + event.clientX + 'px; top: ' + event.clientY + 'px;';
});

document.querySelector('.cursor2').addEventListener('hover', function () {
  textContent = 'Reveal';
});

document
  .querySelector('.header-section')
  .addEventListener('click', function () {
    document.getElementById('videoLink').style.zIndex = '1';
  });

function fadeOut() {
  const video = document.getElementById('videoLink');
  video.style.opacity = '2';

  const fadeOut = document.getElementById('cursorID');
  const fadeOut2 = document.getElementById('cursor2ID');

  fadeOut.style.opacity = '2';
  fadeOut2.style.opacity = '2';

  fadeOut.classList.remove('cursor');
  fadeOut2.classList.remove('cursor2');

  fadeOut.classList.add('cursorFade');
  fadeOut2.classList.add('cursor2Fade');

  const textShadow = document.querySelector('.header-text');
  const textSecondary = document.querySelector('.secondary-text');

  textShadow.textContent = 'Tailored designs for a unique you';
  textShadow.style.fontSize = '8rem';
  textShadow.style.fontWeight = '500';
  textShadow.style.textShadow = '2px 2px 4px #000000';
  textSecondary.textContent = 'Discover our vintage designs';
}

/////////////////////////////////////////////////////////////////
// SMOOTH SCROLL
const heroSection = document.querySelector('.btn-hero');
const section1 = document.querySelector('#section--1');

heroSection.addEventListener('click', function (e) {
  const section1Coords = section1.getBoundingClientRect();
  section1.scrollIntoView({ behavior: 'smooth' });
});

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// TESTIMONIALS
let testSlide = document.querySelectorAll('.testimonial-item');
let dots = document.querySelectorAll('.dot');
let counter = 0;

function switchTest(currentTest) {
  currentTest.classList.add('active');
  const testID = currentTest.getAttribute('attr');

  if (testID > counter) {
    testSlide[counter].style.animation = 'next1 0.5s ease-in forwards';
    counter = testID;
    testSlide[counter].style.animation = 'next2 0.5s ease-in forwards';
  } else if (testID == counter) {
    return;
  } else {
    testSlide[counter].style.animation = 'prev1 0.5s ease-in forwards';
    counter = testID;
    testSlide[counter].style.animation = 'prev2 0.5s ease-in forwards';
  }
  indicators();
}

function indicators() {
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  dots[counter].className += ' active ';
}

function slideNext() {
  testSlide[counter].style.animation = 'next1 0.5s ease-in forwards';
  if (counter >= testSlide.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  testSlide[counter].style.animation = 'next2 0.5s ease-in forwards';
  indicators();
}

function slideAuto() {
  deleteInterval = setInterval(timer, 3000);
  function timer() {
    slideNext();
    indicators();
  }
}
slideAuto();

const container = document.querySelector('.testimonial-indicators');
container.addEventListener('mouseover', pause);
function pause() {
  clearInterval(deleteInterval);
}

container.addEventListener('mouseout', slideAuto);
///////////////////////////////////////////////////

// ACCORDIAN
let accordianBox = document.querySelectorAll('.accordian-box');
let iconBtn = document.querySelectorAll('.icon');

accordianBox.forEach((item, index) => {
  item.addEventListener('click', () => {
    accordianBox.forEach(eachItem => {
      eachItem.classList.remove('active');
    });
    item.classList.add('active');

    iconBtn.forEach(iconBtn => {
      iconBtn.textContent = '+';
    });
    iconBtn[index].textContent = '-';
  });
});

/////////////////////////////////////////////////

function emailValidation() {
  const form = document.getElementById('form');
  const email = document.getElementById('email').value;
  const text = document.getElementById('text');
  const button = document.getElementById('emailBtn');
  const pattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

  if (email.match(pattern)) {
    form.classList.add('valid');
    form.classList.remove('invalid');
    text.innerHTML = 'Your Email address is Valid';
    text.style.color = '#00ff00';

    button.addEventListener('click', function () {
      window.alert('Successfully signed up to our newsletter');
      return;
    });
  } else {
    form.classList.add('invalid');
    form.classList.remove('valid');
    text.innerHTML = 'Your Email address is Invalid';
    text.style.color = '#ff0000';
  }
}
