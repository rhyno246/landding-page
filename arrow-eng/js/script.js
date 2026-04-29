
new WOW().init(); 
 $('.content-global').slick({
		prevArrow: '<a href="" title="" class="prev visible-lg"><img src="images/pre.png"></a>',
    nextArrow: '<a href="" title="" class="next visible-lg"><img src="images/pre.png"></a>',
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:false,
    infinite: false,
    dots:true,
    responsive: [
     {
        breakpoint: 1024,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false
        }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});