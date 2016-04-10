$(document).ready(function() {

  $('a.blog-button').click(function() {
    // If already in blog, return early without animate overlay panel again.
    if (location.hash && location.hash == "#blog") return;
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return;
    $('.main-post-list').removeClass('hidden');
    currentWidth = $('.panel-cover').width();
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed');
      $('.content-wrapper').addClass('animated slideInRight');
    } else {
      $('.panel-cover').css('max-width', currentWidth);
      $('.panel-cover').animate({
        'max-width': '700px',
        'width': '30%'
      }, 400, swing = 'swing', function() {});
    }
  });

  if (window.location.hash && window.location.hash == "#blog") {
    $('.panel-cover').addClass('panel-cover--collapsed');
    $('.main-post-list').removeClass('hidden');
  }
  var cur_page = window.location.pathname.match(/\/([\W\w\d]+?)\//);
  cur_page = cur_page ? cur_page[1] : null;
  if (['tag', 'about', 'author'].indexOf(cur_page) != -1) {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

  $('.btn-mobile-menu__icon').click(function() {
    if ($('.navigation-wrapper').css('display') == "block") {

      $('.navigation-wrapper').toggleClass('animated bounceInDown animated bounceOutUp');
      $('.navigation-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $('.navigation-wrapper').attr('class', 'navigation-wrapper');
      });


    } else {
      $('.navigation-wrapper').toggleClass('visible animated bounceInDown');

    }
    $('.btn-mobile-menu__icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');

  });

  $('.navigation-wrapper .blog-button').click(function() {
    // if ($('.navigation-wrapper').css('display') == "block") {
    //   $('.navigation-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    //     $('.navigation-wrapper').toggleClass('visible animated bounceOutUp');
    //   });

    //   $('.navigation-wrapper').toggleClass('animated bounceInDown animated bounceOutUp');
    // }

    // $('.btn-mobile-menu__icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');
    $('.btn-mobile-menu__icon').click();
  });
});
$(document.links).filter(function() {
  return this.hostname != window.location.hostname;
}).attr('target', '_blank');