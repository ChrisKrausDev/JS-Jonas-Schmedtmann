'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault(); // after click on link page will not go to pos 0 of y axis
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Node list is not an array, but it still has a forEach() method! So we want to give an event listeners to each buttons:

    //  the old way: 

// for (let i = 0; i <button btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));



btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//t                                                             
//t                                                             
//t                                                             



//t 182 HOW THE DOM REALLY WORKS 

// DOM is a very complex API that contains lots of methods and properties with the DOM tree 

// .querySelector() / .addEventListener() / .createElement() / .innerHTML / .textContent / .children / etc...

      // represented by JS object -> Node (textContent; .childNodes; .parentNode; .cloneNode() )-> Element, Text, Comment, Document

//t 183 SELECTING, CREATING AND DELETING ELEMENTS 

    //todo selecting elements 

console.log(document.documentElement); // entire document
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSection = document.querySelectorAll('.section');

console.log(allSection); // NodeList(4) [section#section--1.section, section#section--2.section, section#section--3.section, section.section.section--sign-up]

document.getElementById('#section--1');
const allButtons = document.getElementsByTagName('button');

// it give us HTMLCollection - when the DOM changes, the HTMLCollection will update automatically. Sometimes it's helpfull 

console.log(allButtons); // HTMLCollection(9) [button.btn--text.btn--scroll-to, button.btn.operations__tab.operations__tab--1.operations__tab--active, button.btn.operations__tab.operations__tab--2, button.btn.operations__tab.operations__tab--3, button.slider__btn.slider__btn--left, button.slider__btn.slider__btn--right, button.btn.btn--show-modal, button.btn--close-modal, button.btn]

console.log(document.getElementsByClassName('btn')); // do not need a dot! gives also a HTMLCollection

    //todo Creating and inserting elements 

// .insertAdjacentHTML

// message is just an object representing a document element
const message = document.createElement('div'); 

message.classList.add('cookie-message');
// message.textContent = 'We use cookie for improved functionality and analytics.';

message.innerHTML = 'We use cookie for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message); // We use cookie for improved functionality and analytics. // cookie-message ccs class // add as the first element -> prepend 

header.append(message); // now it's on the bottom - because it'a a last child 

// above, it can create only one element. creating more element with:
// header.append(message.cloneNode(true));

header.before(message); // before header element - rodzeństwo
// header.after(message); // after element - rodzeństwo

    //todo Delete elements 

// remove after click 'ok':

document.querySelector('.btn--close-cookie').addEventListener('click', function() {
  // message.remove(); // new way
  message.parentElement.removeChild(message); // old way 
});

//t 184 STYLES, ATTRIBUTES AND CLASSES 

//todo Styles 

message.style.backgroundColor = '#37383d'

// inline style - below from DOM: 
message.style.width = '120%' 

// <div class="cookie-message" style="background-color: rgb(55, 56, 61); width: 120%;">We use cookie for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button></div>

console.log(message.style.height); // it works only for inline styles, that we set using style properity

console.log(message.style.backgroundColor); // rgb(55, 56, 61)

// but we can do so: 

console.log(getComputedStyle(message)); //  this contains all properties and values of the object 

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).width);

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px'; //  Number.parseFloat take the number from a string (1298.39px)

// editing the variables in CSS file: 
// document.documentElement.style.setProperty('--color-primary', 'orangered')

//todo Attributes 

const logo = document.querySelector('.nav__logo');
console.log(logo.alt); // Bankist logo
console.log(logo.className); // nav__logo

logo.alt = 'Beautiful minimalist logo'; // we can set it as we want to

// Non-standard:

console.log(logo.designer); // undefined! was added later, and it's not a standard img attributes BBBBBUUUUUUUUUUUUUUUT: 

console.log(logo.getAttribute('designer')); // Jonas

logo.setAttribute('company', 'Bankist');
console.log(logo); // <img src="img/logo.png" alt="Beautiful minimalist logo" class="nav__logo" id="logo" designer="Jonas" company="Bankist">

console.log(logo.src); // http://127.0.0.1:8080/starter/img/logo.png // absolute 
console.log(logo.getAttribute('src')); // relative

const link = document.querySelector('.nav__link--btn');

console.log(link.href); // script.js:158 http://127.0.0.1:8080/starter/#
console.log(link.getAttribute('href')); // #

//todo Data attributes 

console.log(logo.dataset.versionNumber); // 3.0

//todo Classes 

logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

logo.className = 'jonas' // do not use it, this will overwrite all existed classes! Do only that what above