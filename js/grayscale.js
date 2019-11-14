(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 100
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  $("#form").on('submit', function(){
      let firstname = $("#firstname").val();
      let lastname = $("#lastname").val();
      let email = $("#email").val();
      let message = $("#message").val();
      // var dataString = 'firstname='+ firstname + '&lastname='+ lastname + '&email='+ password + '&contact1='+ contact;
      let dataString = $('#form').serialize();
      console.log("Data send:" + dataString);
      // if(name==''||email==''||password==''||contact=='')
      // {
      //     alert("Please Fill All Fields");
      // }
      // else
      // {
          // AJAX Code To Submit Form.
//           $.ajax({
//               crossDomain: true,
//               dataType: 'jsonp',
//               url: "https://leanqualityacademy.com/GilanBuilding/Mail/gilanform.php",
//               data: dataString,
//               cache: false,
//               success: function(result){
//                 // $(window).scrollTop(0);

//               }
         });
           alert("Your message has been sent.");
      // }
      // return false;
  });
})(jQuery); // End of use strict
