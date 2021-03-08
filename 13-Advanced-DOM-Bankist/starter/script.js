'use strict';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

//todo ///////////////////////////////////////
//todo Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsCpontent = document.querySelectorAll('.operations__content'); 

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

//todo Button smooth scrolling 
btnScrollTo.addEventListener('click', function(e) {

    // we need to first get the coordinates of the element that we want to scroll to:
  const s1coords = section1.getBoundingClientRect();

  // console.log(s1coords); // position of section1: DOMRect {x: 0, y: 665, width: 1080, height: 1398, top: 665, …}

  // console.log(e.target.getBoundingClientRect()); // e.target is btnScrollTo, position of this button: OMRect {x: 30, y: 426.84375, width: 110, height: 29, top: 426.84375, …} 

    // getBoundingClientRect() is relative to viewport

  // console.log('Current scroll (X/Y)', 
  // window.pageXOffset, 
  // pageYOffset); // viewport to current position of the page: Current scroll (X/Y) 0 0

  // console.log('height/width viewport', 
  // document.documentElement.clientHeight, 
  // document.documentElement.clientWidth);

  //todo Scrolling (oldschool) 

    // 1 arg - left position
    // 2 arg - top position
    // after click we are at the top of section1. We need to add actual position of the window! (window.pageYOffset)
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset, 
  //   s1coords.top + window.pageYOffset
  //   ); 

    // by passing an object with 3 properties, instaed of two args we can make it smooth  

  // window.scrollTo({
  //   left : s1coords.left + window.pageXOffset, 
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth'
  // });

  //todo Scrolling (modern JS) 

  section1.scrollIntoView({behavior: 'smooth'})
});

//todo ///////////////////////////////////////
//todo Page Navigation 


// document.querySelectorAll('.nav__link').forEach(  // nodelist
//   (function(el) {
//     el.addEventListener('click', function(e) {
//       e.preventDefault();
      
//       const id = this.getAttribute('href');
//       console.log(id); // #section--2
//         // it's a common technique for implementing navigation like this: 
//       document.querySelector(id).scrollIntoView({ behavior: 'smooth'}); 
//     });
//   })
// );

  // example above is ok, but not efficient, //t Event Delegation helps to solve this problem 

  // 1. Add event listener to common parent element 
  // 2. Determine what element originated the event 

document.querySelector('.nav__links').addEventListener('click', function(e) {
  e.preventDefault();
  console.log(e.target); // JS can recognize, on which element click occures => <a class="nav__link" href="#section--1">Features</a> - we have to match only the element that we intrested in. In order to do that we need to check if the target has '.nav__link' class

  // Matching strategy:

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id); // #section--2
        // it's a common technique for implementing navigation like this: 
    document.querySelector(id).scrollIntoView({ behavior: 'smooth'});
  }
});

//todo Tabbed component 

  // bad practice - by 200 tabs it will be to looooooong to find it out
//  tabs.forEach(t => t.addEventListener('click', () => console.log('TAB'))
// );

  // beter is with event delegation => add event on the parent element (in this case => tabsContainer)

tabsContainer.addEventListener('click', function(e) {
    // matching => which button was clicked? 

  // const clicked = e.target;

    // it works, but when we click on numbr (on the left side of the button 01) then we have a SPAN element! We need button! Because it have data-tab atribute (1 - 3) which we need later
  
  // console.log(clicked); 

    //  to avoid this problem we can use DOM traversing: 

  // const clicked = e.target.parentElement;

    // it works fine when we click on span because the button is a parent element of the span! But now problem comes when we click on button itself, because it will show button parent => 'operations__tab-container 

  // console.log(clicked);

    // so to avoid this problem we can use closest() method. It will seek for the closest element with class name => 'operations__tab'

  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);
  
    // Guard clause => clicking on contener we get an error in console (Cannot read property 'classList' of null at HTMLDivElement.<anonymous>) => because there is no nearest element with this class. We have to ignore any clicks on that area 

  if (!clicked) return;

    // CLEARING CLASS => before adding a class, we have to remove it from all of the buttons

  //  tabs
  tabs.forEach(t => t.classList.remove('operations__tab--active'));

  // content areas
  tabsCpontent.forEach(c => c.classList.remove('operations__content--active'))

    // Activate tab => adding class after click to the 'clicked'

  clicked.classList.add('operations__tab--active'); 

    // Activating content area. dataset - is the place where special data properties are stored

  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
  // console.log(clicked.dataset.tab);
 
});

// todo Nav fade animation 

  // we need to find a common parent element to the menu and logo, which will bubble up from the links. We need to use 'mouseover', because 'mouseenter' does not bubble, and here we need event to bubble. 

  // btw, we don't need closest() method, because there is no other element like span in button

const handlerHover = function(e) {

    //  this keyword is equal to current target 

  // console.log(this, e.currentTarget);

  if (e.target.classList.contains('nav__link')) {

      // creating an element which contains the element that we working with

    const link = e.target;

      // selecting sibiling elements (all other links)
      // const sibilings = link.closest('.nav')  - we are now at parent of all of the links, and now from there we can search for nav links again. And it will be a sibilings of our initial links 

    const sibilings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

      // changing opacity of the other items 

    sibilings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
}; 

  // we use bind() method here to pass argument into a handler function. Any handler function can only have one real argument. And can only have one real parameter - and that is the event (e)

nav.addEventListener('mouseover', handlerHover.bind(0.5));

nav.addEventListener('mouseout', handlerHover.bind(1));

//todo Sticky navigation 

/*

  // this method is not efficient, the window.scrollY fires all the time, there is a way better attempt to do that. 

const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords); // DOMRect {x: 0, y: 585, width: 1137, height: 1398, top: 585, …}

window.addEventListener('scroll', function() {

  if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');

    // position from top viewport to the top of the page   

  // console.log(window.scrollY);


});

*/

//t 194. A better way: The Intersection Observer API 

/*

 // IO API allows our code to observ changes to the way that the certain target element intersect another element OR the way it intesect the viewport 

 
  //  this callback function will get called each time that the observed element (section1 => observer.observe(section1) is intersecting the root element at the threshold that we defined)
const obsCallback = function(entries, observer) {
  entries .forEach(entry => {
    // console.log(entry); //  to check or intersection is true => IntersectionObserverEntry {time: 192.94499999978143, rootBounds: DOMRectReadOnly, boundingClientRect: DOMRectReadOnly, intersectionRect: DOMRectReadOnly, isIntersecting: false, …}
    console.log('intersecting? =>', entry.isIntersecting, ', visable? =>', entry.isVisible, ', inSeRatio:', entry.intersectionRatio);
  })
};

const obsOptions = {
    // root is the element that the target is intersecting
  root: null,

    //  threshold is the percentage of intersection at which the obsCallback will be called. 
    
      //    By 10% => if 10% of the section1 will shown at the viewport the 'entry.Intersecting' property will be 'true'
      //    By 0 => the obsCallback will trigger when our target element moves completely out of the view.
      //    By 1 => only will be trigged when target element will be 100% wisable in the viewport 

  threshold: [0, 0.2] // 10% 
};

const observer = new IntersectionObserver
(obsCallback, obsOptions);

observer.observe(section1);

// soooooooo whenever the first section is intersecting the viewport (root: null => whole viewport) at 10% (threshold => 10%) the obsCallback will get called (no metter or we are scrolling up od down)

*/ //t end of the training section

// we want to sticky menu in this point, when header moves complitly out of the view 

const header = document.querySelector('.header');

  // because of the RWD (responsibe web design) is better to calculate the nav bar height:

const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);

const stickyNav = function(entries) {
  const [entry] = entries; //  the same as: entries[0]
  // console.log(entry.isIntersecting);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');

};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0, 

    // rootMargin is a box of for example 90px that will be applied outside of our target element. (90px is the haight of the navigation bar)
  rootMargin: `-${navHeight}px`
});
headerObserver.observe(header) // using headerObserver to observe the header section.

//t 195. Revealing Elements on Scroll
  // odkrywanie elementów przy scrollowaniu 

/*

now all section have this properity: 

    .section--hidden {
      opacity: 0;
      transform: translateY(8rem);
    }

to make it visable, we have to remove class 'section--hidden' with JS from HTML when we reach this section by scrollin

*/

//todo Reveal Sections 

  // We want to observ all 4 sections. There is possible to oberve them all using the same observer. So let select all this sections and then we will observe them as multiple targets, using sectionObserver.

const allSections = document.querySelectorAll('.section')

const revealSection = function(entries, observer) {
  const [entry] = entries;
  // console.log(entry);

    // guard claus 
  if(!entry.isIntersecting) return;

    // we have to know which section intersecting the viewport
  entry.target.classList.remove('section--hidden');

    // unobserve unnecessary targets. By going to the down of the website the all targets will be no more observe
  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(
  revealSection, {
    root: null,
    threshold: 0.15,
  })

allSections.forEach(function(section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden')
});

//t 196 Lazy Loading Images 

/*

This feature has impact on the efficiency of the website.

<div class="features">
        <img 
            // LQ pic
          src="img/digital-lazy.jpg"

            // HQ pic, and data-src is not a standart html atribute, but we can declare it ourselves
          data-src="img/digital.jpg"

          alt="Computer"
          class="features__img lazy-img"
        />

When we scroll we will replace this LQ pic to the HQ pic, and remove 'lazy-img' class which make the image blurr

*/

  // we have to select only the photos with data-src atr => 'img[data-src]'

const imgTargets = document.querySelectorAll('img[data-src]');

// console.log(imgTargets); // [img.features__img.lazy-img, img.features__img.lazy-img, img.features__img.lazy-img]

const loadImg = function(entries, observer) {
  const [entry] = entries;
  // console.log(entry.isIntersecting, entry);

    // if not intersecting => end up the function
  if (!entry.isIntersecting) return;

    // is is intersecting => replace src with data-src.
    

  entry.target.src = entry.target.dataset.src;

    //  this replacing of the src attribute actually basically happens behind the scenes. JS findes the new img that it should load and display here and it does that behind the scenes. Once it's finished loading that image it will omit the load event. And the Load Event is just like any other event => we can listen for it, adn then do smth on that image 

    // doing so, it will be performance issue by slow internet
  // entry.target.classList.remove('lazy-img')

    // so better is to do it by lisen to the load event:
  
  entry.target.addEventListener('load', function() {
    entry.target.classList.remove('lazy-img')
  });

    // after loading the img we do not need to whatch the img any more, so:

  observer.unobserve(entry.target);
}

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,

    // specifying negative root margin - to load this imgs bit earlier, so that the user can not notice of the lazy load
   
  rootMargin: '200px'
});

imgTargets.forEach(img => imgObserver.observe(img))

//t 197. Building a Slider Component: Part 1 

//todo Slider

const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;

    // by last slide we can set a variable that will hold the max slide it can be moved to the right. On the node list we can olso use the 'length' properity
  const maxSlide = slides.length -1;

  // functions 

  const createDots = function () {
      // creating a dot HTML element 
    slides.forEach((_, i) =>{
      dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`)
    })
  };

    //  active dot with another color
  const activateDot = function(slide) {
    document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));

      // by slide 2 we select the slide with data-slide attribute "2"
    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active')
  };


  const goToSlide = function (slide) {
    slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - slide)}%)`)
  }
    // will start at slide nr 0 after opening the webside

  // Next Slide
  const nextSlide = function () {
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    };
    // if (i == 4) curSlide = 0;

      // we want 1st slide to be -100%; 2nd - 0; 3rd - 100% etc
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide;
    } else {
      curSlide--
    };
    goToSlide(curSlide);
    activateDot(curSlide);
  }

  const init = function() {
    goToSlide(0);
    createDots();
    activateDot(0);
  }

  init();

  // event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  //todo keybord events! 

  document.addEventListener('keydown', function (e) {
    // console.log(e);
    if (e.key === 'ArrowLeft') prevSlide();
      //  this same by right arrow using short circuiting 
    e.key === "ArrowRight" && nextSlide();
  });

    //  to make dots works! After click on the dot will go to the slide

  dotContainer.addEventListener('click', function(e) {
    if (e.target.classList.contains('dots__dot')) {
        // destructuring
      const {slide} = e.target.dataset; // data-slide="0 - 4" in HTML! 
      console.log(slide);
      goToSlide(slide);
      activateDot(slide);
    }
  });


  /*
  0 * 100 = 0%
  1 * 100 = 100%
  2 * 200 = 200%

  0%, 100%, 200%, 300%

  */
};
slider();


















//t                                                             
//t                                                             
//t                                                             



//t 182 HOW THE DOM REALLY WORKS 

// DOM is a very complex API that contains lots of methods and properties with the DOM tree 

// .querySelector() / .addEventListener() / .createElement() / .innerHTML / .textContent / .children / etc...

      // represented by JS object -> Node (textContent; .childNodes; .parentNode; .cloneNode() )-> Element, Text, Comment, Document

//t 183 SELECTING, CREATING AND DELETING ELEMENTS 

/*

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

*/

//t 184 STYLES, ATTRIBUTES AND CLASSES 

/*

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

*/

//t 185 Implementing Smooth Scrolling

/*

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function(e) {

    // we need to first get the coordinates of the element that we want to scroll to:
  const s1coords = section1.getBoundingClientRect();

  // console.log(s1coords); // position of section1: DOMRect {x: 0, y: 665, width: 1080, height: 1398, top: 665, …}

  // console.log(e.target.getBoundingClientRect()); // e.target is btnScrollTo, position of this button: OMRect {x: 30, y: 426.84375, width: 110, height: 29, top: 426.84375, …} 

    // getBoundingClientRect() is relative to viewport

  // console.log('Current scroll (X/Y)', 
  // window.pageXOffset, 
  // pageYOffset); // viewport to current position of the page: Current scroll (X/Y) 0 0

  // console.log('height/width viewport', 
  // document.documentElement.clientHeight, 
  // document.documentElement.clientWidth);

  //todo Scrolling (oldschool) 

    // 1 arg - left position
    // 2 arg - top position
    // after click we are at the top of section1. We need to add actual position of the window! (window.pageYOffset)
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset, 
  //   s1coords.top + window.pageYOffset
  //   ); 

    // by passing an object with 3 properties, instaed of two args we can make it smooth  

  // window.scrollTo({
  //   left : s1coords.left + window.pageXOffset, 
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth'
  // });

  //todo Scrolling (modern JS) 

  section1.scrollIntoView({behavior: 'smooth'})
});

*/ 

//t 186. Types of Events and Event Handlers 

// event is a signal generated by a certain DOM Node (something has happend - click somewhere, mouse moving)

  //TODO addEventListener

  // multiple event listeners to the same event
  // we can remove addEventListener 

// const h1 = document.querySelector('h1');
// const alertH1 = function(e) {
//   alert('addEventListiner: Great!');

// };

// h1.addEventListener('mouseenter', alertH1)

//   //  thanks to that it will work only once! It can be in any place of out code
// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

  //TODO ON EVENT PROPERTY 

  // only one function to the on evenet property

// h1.onmouseenter = function(e) {
//   alert('onmouseenter: Great!');
// };

//t 187. Event Propagation: Bubbling and Capturing 

//t 188 Event Propagation in Practice

// rgb(255, 255, 255)

// random generated color after click: 

/*

const randomInt = (min, max) => 
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

console.log(randomColor(0, 255));

document.querySelector('.nav__link').addEventListener('click',

  // addEventListener is only listening for events in the bubbling phase but not in a caputing phase. That's default behavior. Capturing phase is irrelevant for us. The bubbling phase can be helpfull for event delegation

  // if we do want to catch events durign caputing phase we can defined a third parameter in the addEventListener

function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Link', e.target, e.currentTarget); 
  // e.target => where the event happend
  // e.currentTarget => where handler is attatched to 
  console.log(e.currentTarget === this);

  // Stop propagation - it's not a good idea
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  //  this is a parent of the .nav__link  
  // bubbling up means that basically it's as if event had also happend in all of the parent elements 
  this.style.backgroundColor = randomColor();
  console.log('container', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
}, true);

 // use capture parameter is set to true, the event handler will no longer listen to bubbling events, but instead to capturing events.

  // with this 'true' the first element through which the event passes, is the navigation, and the reason for that is that this element is now actually listening for the event as it travels down from the DOM 

*/  

//t 189 Event Delegation: Implementing Page Navigation 

//t 190 Traversing the DOM 

/*

//todo upwards - parents 

const h1 = document.querySelector('h1');

// Going downwards: selecting child elements 
console.log(h1.querySelectorAll('.highlight')); // NodeList(2) [span.highlight, span.highlight]

console.log(h1.childNodes); // NodeList(9) [text, comment, text, span.highlight, text, br, text, span.highlight, text]

// nodes can be anything! like above! 

console.log(h1.children); // HTMLCollection(3) [span.highlight, br, span.highlight]

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

console.log(h1.parentNode); // <div class=​"header__title">​…​</div>​
console.log(h1.parentElement);


// when we need to find a parent element, no matter how far is it in the DOM Tree. We can do it with closest() method:

// it selectet the closest header to h1 element (closest parent element with header class) and then simply applied all style to that element 
h1.closest('.header').style.background = 'var(--gradient-secondary)'

h1.closest('h1').style.background = 'var(--gradient-primary)'

// closest is basicaly oposit of querySelector. Both recive a query string as an input, but querySelector finds children, no matter how deep in the Dom tree while the closest method finds parents and also no matter how far up in the DOM tree

//todo going sideways: sibilings 

console.log(h1.previousElementSibling); // null
console.log('nextElementSibiling => ', h1.nextElementSibling);

console.log('h1.previousSibling => ', h1.previousSibling);
console.log('h1.nextSibling => ', h1.nextSibling);

console.log('h1.parentElement.children => ', h1.parentElement.children);

[...h1.parentElement.children].forEach(function(el){
  if(el !== h1) el.style.transform = 'scale(0.5)';
});

*/

//t 191. Building a Tabbed Component 

//t 192. Passing Arguments to Event Handlers 

//t 193. Implementing Sticky Nav = scroll event 

//t 194. A better way: The Intersection Observer API 


