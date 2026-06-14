/* ============================================================
   Egor — Portfolio / main.js
   ============================================================ */

$(function () {
  'use strict';

  /* ---- Reveal on scroll (IntersectionObserver) ---- */
  var $reveal = $('[data-reveal]');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    $reveal.each(function () {
      observer.observe(this);
    });
  } else {
    // Fallback: just show everything
    $reveal.addClass('is-visible');
  }

  /* ---- Smooth scroll for in-page anchors ---- */
  $('a[href^="#"]').on('click', function (e) {
    var target = $(this).attr('href');

    if (target === '#' || target.length < 2) {
      return;
    }

    var $target = $(target);
    if ($target.length) {
      e.preventDefault();
      $('html, body').animate(
        { scrollTop: $target.offset().top - 24 },
        500
      );
    }
  });
});
