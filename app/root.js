'use strict';

$(document).ready(function navBarScrollLock() {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 150) {
      $('nav').addClass('navbar-background-change');
    }
    if ($(window).scrollTop() < 151) {
      $('nav').removeClass('navbar-background-change');
    }
  });

});
