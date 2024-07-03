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
