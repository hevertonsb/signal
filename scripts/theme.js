$( document ).ready(function() {
  $('.navbar__toggle-menu').click(function(){
    $('.navbar__menu').toggleClass('show');
    $('body').toggleClass('bodyOverflow');

    if ($('.navbar__menu').hasClass('show')) {
      $('.navbar__toggle-menu i').removeClass('fa-bars');
      $('.navbar__toggle-menu i').addClass('fa-times');
    } else {
      $('.navbar__toggle-menu i').removeClass('fa-times');
      $('.navbar__toggle-menu i').addClass('fa-bars');
    }
  });

  $('.form-busca').hide();
  $('.busca').click(function(){
    $('.form-busca').fadeToggle('fast');
    $('.form-busca input[type="text"]').focus();
    $('.overlay').fadeToggle('fast');
    $('body').toggleClass('bodyOverflow');
  })

  $('.overlay').click(function(){
    $(this).hide();
    $('.form-busca').hide();
    $('body').removeClass('bodyOverflow');
  })

  $(window).on('resize', function(){
    if (window.matchMedia("(min-width:1100px)").matches) {
      $('.navbar__menu').removeClass('show');
      $('body').removeClass('bodyOverflow');
    }
  });

  $('.navbar__toggle-dropdown').click(function(){
    $('.navbar__dropdown').removeClass('show');
    $(this).next().toggleClass('show');
  })

  $('.btn-back').click(function(){
    history.back();
    return false;
  })

  const hamburgers = document.querySelector(".navbar__toggle-menu .hamburger");
  hamburgers.addEventListener("click", () => {
    hamburgers.classList.toggle('is-active');
  });

  var scrollPosition = $(".row-news").scrollTop();
	localStorage.setItem("scrollPosition", scrollPosition);
	if(localStorage.scrollPosition) {
		$(".row-news").scrollTop(localStorage.getItem("scrollPosition"));
	}
});
