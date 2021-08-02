$(function(){
//---------------- bannar js start ----------------
$('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    autoplaySpeed: 1500,
  });
//---------------- bannrt js end ----------------

// -------------- service js start --------------


$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    arrows:true,
    prevArrow:('<i class="fa fa-chevron-left service_left_arrow"></i>'),
    nextArrow:('<i class="fa fa-chevron-right service_right_arrow"></i>'),

    
  responsive: [
    {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        autoplay:true,
        arrows:true,
      }
    },
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        autoplay:true,
        arrows:true,
      }
    },
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
// -------------- service js end --------------

// -------------- portfolio js start --------------
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
})
// -------------- portfolio js end --------------

// -------------- team js start --------------
$('.responsive').slick({
  dots: false,
  infinite: true,
  speed: 300,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow:('<i class="fa fa-chevron-left team_left_arrow"></i>'),
  nextArrow:('<i class="fa fa-chevron-right team_right_arrow"></i>'),
  responsive: [
    {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
      }
    },
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// -------------- team js end --------------


// -------------- testimonial js start --------------

$('.variable-width').slick({
  dots: false,
  infinite: true,
  speed: 300,
  autoplay: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  centerMode: false,
  variableWidth: false,
  prevArrow:('<i class="fa fa-chevron-left testimonial_left_arrow"></i>'),
  nextArrow:('<i class="fa fa-chevron-right testimonial_right_arrow"></i>'),
  responsive: [
    {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings
  ]
});









// -------------- testimonial js end --------------







// -------------- service js start --------------

// -------------- service js end --------------
});

