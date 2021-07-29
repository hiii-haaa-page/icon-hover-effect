'use strict';
{
  VanillaTilt.init(document.querySelectorAll('.sci li a'), {
    max: 30,
    speed: 400,
    glare: true,
    'max-glare': 1,
  });

  let list = document.querySelectorAll('.sci li');
  let bg = document.querySelector('.socialMedia');
  list.forEach(e => {
    e.addEventListener('mouseenter', event => {
      let color = event.target.getAttribute('data-color');
      bg.style.backgroundColor = color;
    });
    e.addEventListener('mouseleave', event => {
      bg.style.backgroundColor = '#fff';
    });
  });
}
