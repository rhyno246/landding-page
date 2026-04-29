// function popupMenu() {
//   document.querySelector('.md-menu-btn-js').addEventListener('click', function () {
//     addActive();
//   });

//   document.querySelector('.md-mask').addEventListener('click', function () {
//     clearActive();
//   })
// }

// function addActive() {
//   document.querySelector('.md-menu').classList.add('md-active');
// }

// function clearActive() {
//   document.querySelector('.md-menu').classList.remove('md-active');
// }



// window.addEventListener('DOMContentLoaded', popupMenu, false);




jQuery(document).ready(function ($) {
  $('body').on('click', function (e) {
    $('.md-menu').slideUp();
    $('.md-menu').removeClass('md-active');
  });

  $('.md-menu-btn-js').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('.md-menu').slideDown();
    $('.md-menu').addClass('md-active');
  });
  $('.md-nav li a').on('click', function (e) {
    $('.md-menu').slideDown();
    $('.md-menu').addClass('md-active');
  });
});
