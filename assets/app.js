// eslint-disable-next-line strict
$(document).ready(function () {
  // Sliders
  $('.subheader_menu').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    // eslint-disable-next-line max-len
    prevArrow: '<a class=\'subheader_prev\' alt=\'1\'><span class=\'icon-icon-left\'></span></a>',
    // eslint-disable-next-line max-len
    nextArrow: '<a class=\'subheader_next\' alt=\'2\'><span class=\'icon-icon-right\'></span></a>',
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 750,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
  $('.discover_slider').slick({
    infinite: true,
    dots: true,
    // eslint-disable-next-line max-len
    prevArrow: $(".discover_prev"),
    // eslint-disable-next-line max-len
    nextArrow: $(".discover_next")
  });
  $('.bestseller_slider').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    centerMode: true,
    arrows: false,
    variableWidth: true
  });
  $('.favorite_slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    // eslint-disable-next-line max-len
    prevArrow: $(".favorite_prev"),
    // eslint-disable-next-line max-len
    nextArrow: $(".favorite_next")
  });
  $('.meet_slider').slick({
    infinite: true,
    // eslint-disable-next-line max-len
    prevArrow: '<img src=\'img/svg/icons/icon-left-big.svg\' class=\'meet_prev\' alt=\'1\'>',
    // eslint-disable-next-line max-len
    nextArrow: '<img src=\'img/svg/icons/icon-right-big.svg\' class=\'meet_next\' alt=\'2\'>'
  });
  $('.categories_slider').slick({
    infinite: false,
    slidesToShow: 4,
    arrows: false
  });
  $('.follow_slider').slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: false
  });
  $('.retailer_slider').slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6
  }); // Like button

  $('.like_icon').click(function () {
    if ($(this).attr('src') == 'img/svg/icons/icon-wish.svg') {
      $(this).attr('src', 'img/svg/icons/icon-wish_fill.svg');
    } else {
      $(this).attr('src', 'img/svg/icons/icon-wish.svg');
    }
  });
});
//# sourceMappingURL=app.js.map
