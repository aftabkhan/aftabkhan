(function($) {

    $('#header__icon').click(function(e){
    e.preventDefault();
    $('body').toggleClass('with--sidebar');
    });
    
    $('#site-cache').click(function(e){
    $('body').removeClass('with--sidebar');
    });

})(jQuery);

$(document).ready(function () {
  $(".mob__menu-btn .mob__btn-open").click(function () {
    $(".mob__overlay").fadeToggle(200);
    $(".hamburger--collapse").toggleClass("is-active");
    $(".mob__overlay").toggleClass("animate");
    $(this).toggleClass('mob__btn-open').toggleClass('mob__btn-close');
  });
  $('.mob__menu a').on('click', function () {
      $(".mob__overlay").fadeToggle(200);
      $(".hamburger--collapse").toggleClass("is-active");
      $(".mob__overlay").toggleClass("animate");
      $(".mob__menu-btn a").toggleClass('mob__btn-open').toggleClass('mob__btn-close');
  });


  $(document).on("scroll", onScroll);  
  //smoothscroll
  $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");
      
      $('.nav-menu ul li a').each(function () {
          $(this).removeClass('active');
      })
      $(this).addClass('active');
    
      var target = this.hash,
          menu = target;
      $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top+1
      }, 500, 'swing', function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
      });
  });
});

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('.nav-menu ul li a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('.nav-menu ul li a').removeClass("");
          currLink.addClass("");
      }
      else{
          currLink.removeClass("");
      }
  });
}
