'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModel = document.querySelectorAll('.show-modal');

console.log(btnOpenModel);

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  //   console.log('Button Clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnOpenModel.length; i++)
  btnOpenModel[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keypress', function (event) {
  //   console.log('A key was pressed');
  console.log(event.key);

  if (event.key === 'Enter' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
