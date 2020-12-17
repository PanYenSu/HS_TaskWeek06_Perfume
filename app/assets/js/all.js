console.log('Hello!');

$(document).ready(() => {
  console.log('HesSchool Hello!');

  $('.btn-product-favorite ').click(function(){
    if($('.material-icons-favorite').hasClass('text-primary')) {
      $('.material-icons-favorite').addClass('text-hot')
      $('.material-icons-favorite').removeClass('text-primary')
    }else{
      $('.material-icons-favorite').addClass('text-primary')
      $('.material-icons-favorite').removeClass('text-hot')
    }
  });

  AOS.init({
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation


    
  });

});

