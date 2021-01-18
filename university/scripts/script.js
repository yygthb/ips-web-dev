window.addEventListener('load', function () {
  setBodyLoaded();
  setAnimatedBlockLoaded('.main');
  setAnimatedBlockLoaded('.why_title');
  setAnimatedBlockLoaded('.why_cards');
});

function setBodyLoaded() {
  let body = document.getElementsByTagName('body')[0];
  body.classList.add('loaded');
};

function setAnimatedBlockLoaded(selector = '.main') {
  let reached = false;
  const ANIMATED_BLOCK_OFFSET = 100;
  const animatedBlock = document.querySelector(selector);
  const animatedBlockOffset = animatedBlock.offsetTop;
  const windowHeight = window.innerHeight;

  window.addEventListener('scroll', function () {
      let scrolled = window.pageYOffset;
      if (scrolled + windowHeight > animatedBlockOffset + ANIMATED_BLOCK_OFFSET) {
          if (!reached) {
              animatedBlock.classList.add('loaded');
              reached = true;
          }

      }
  });
};

const formButton = document.querySelector('.form_button');

formButton.addEventListener('click', e => {
  e.preventDefault();
});