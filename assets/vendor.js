$( document ).ready(function() {

    $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links

    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {

      // Figure out element to scroll to
      var target = $(this.hash);
      console.log(target);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      var header_size = $(".mega-wrap").innerHeight() + 10;
      // Does a scroll target exist?
      if (target.length) {

        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - header_size
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


    // Parallax
    $.stellar();
    

    // sticky menu
    $(window).bind("load", function () {
      var  mn = $(".mega-wrap");
        mns = "main-nav-scrolled";
        mnsz = "exit";
        mhdr = $('header').innerHeight();
        hdr = $('.header-container').height() + 200;
          
        $('.header-temp-wrap').css('height', mhdr);

     $(window).scroll(function() {
        console.log($(this).scrollTop());
        var scroll = $(window).scrollTop();

          if( $(this).scrollTop() == 0 ) {
            mn.removeClass(mns);
            mn.addClass(mnsz);
          } else if( $(this).scrollTop() > hdr ) {
            mn.addClass(mns);
            mn.removeClass(mnsz);
          } else if ( $(this).scrollTop() > 1 ) {
            mn.removeClass(mns);
            mn.addClass(mnsz);
          }

      });

      var  mn1 = $(".product-sticky-wipes");
        mns1 = "footer-prod-scrolled";
        mnsz1 = "exit";
        mhdr1 = $('header').innerHeight();
        hdr1 = $('.header-container').height() + 100;
          
        $('.header-temp-wrap').css('height', mhdr1);

      $(window).scroll(function() {
        var scroll = $(window).scrollTop();

          if( $(this).scrollTop() > hdr1 ) {
            mn1.addClass(mns1);
            mn1.removeClass(mnsz1);
          } else if ( $(this).scrollTop() > 1 ) {
            mn1.removeClass(mns1);
            mn1.addClass(mnsz1);
          }

      });
     
   });

    // var cookies = $.cookie();
    // for(var cookie in cookies) {
    //    $.removeCookie(cookie);
    // }

    $(function() {
        $("#CartDrawer form").submit(function(e) {
            e.preventDefault();//prevent the form from actually submitting
            window.location = '/cart';
        });
    });

    // Trigger dropdown on parent click - custom code
    $('.mobile-nav__link').on('click',function(){
        
        if ($(this).next().hasClass('mobile-nav__toggle')) {
           
            if ($(this).parents('.mobile-nav__has-sublist').hasClass('mobile-nav--expanded')) {
                 $(this).parents('.mobile-nav__has-sublist').removeClass('mobile-nav--expanded');
                 $(this).parents('.mobile-nav__item').find('.mobile-nav__sublist').slideToggle();
            }
            else {
                $(this).parents('.mobile-nav__has-sublist').addClass('mobile-nav--expanded');
                $(this).parents('.mobile-nav__item').find('.mobile-nav__sublist').slideToggle();
            }
        } else {

        }
        // remove existing open class on li
        $('li').removeClass('open');
        // add class on current element(li)
        $(this).closest('li').toggleClass('open');
    });

});