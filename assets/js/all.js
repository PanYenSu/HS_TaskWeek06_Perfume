"use strict";

console.log('Hello!');
$(document).ready(function () {
  console.log('HesSchool Hello!');
  $('.btn-product-favorite ').click(function () {
    if ($('.material-icons-favorite').hasClass('text-primary')) {
      $('.material-icons-favorite').addClass('text-hot');
      $('.material-icons-favorite').removeClass('text-primary');
    } else {
      $('.material-icons-favorite').addClass('text-primary');
      $('.material-icons-favorite').removeClass('text-hot');
    }
  });
});
//# sourceMappingURL=all.js.map
