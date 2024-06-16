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
// NEWSLETTER FORM
const email = document.getElementById('emailID');
const submit = document.getElementById('buttonID');
const error = document.getElementById('errorID');

const showError = () => {
  error.style.display = 'block';
};
//FIX ME
submit.addEventListener('click', e => {
  e.preventDefault();
  if (!email.ariaValueMax.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
    return showError();
  }
  console.log('success');
  window.prompt('Email added to newsletter');
});
