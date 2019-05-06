$(function() {

    $(".owl-carousel").owlCarousel({
      loop:true,
      items:1,
      autoplay: true,
      margin:0,
      dots:false
    });


    var showImage = function(e) {
      var imgSrc = $(this).find('img').attr('src');

      if (e.type === 'mouseenter') {
        var srcNew = imgSrc.substr(0, imgSrc.length - 4); 
        $(this).find('img').attr('src', srcNew + '-1.jpg');
      }
      if (e.type === 'mouseleave') {
        srcNew = imgSrc.substr(0, imgSrc.length - 6);
        $(this).find('img').attr('src', srcNew + '.jpg');
      }
    };

    $('.best-sellers-slider-img').on('mouseenter', showImage);
    $('.best-sellers-slider-img').on('mouseleave', showImage);




});
   