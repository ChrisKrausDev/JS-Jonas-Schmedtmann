'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < btnsOpenModal.length; i++) 
    btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
    // odwołanie do funkcji bez (), z nawiasami wywoła się od razu, bez nawiasów dopiero po wystąpieniu clicka

document.addEventListener('keydown', function(e) {
    console.log(e);
    console.log(e.key);

    if (e.key === 'Escape') {
        if(!modal.classList.contains('hidden')) {
            closeModal();
        }
        // jeżeli modal nie ma klasy hidden (bo zaprzeczenie - !), to zamknij modal (tutaj funkcja koniecznie z () ) 

        // zagnieżdżenie instrukcji warunkowych, lepiej napisać to w ten sposób: 
     if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
        }
    }
});
