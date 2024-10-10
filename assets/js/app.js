const navmenu = () => {
    document.getElementById("mobile-view").classList.toggle("max-sm:top-0");
    document.getElementById("nav-line").classList.toggle("rotate-45");
    document.getElementById("nav-line").classList.toggle("after:rotate-90");
    document.getElementById("nav-line-out-side").classList.toggle("translate-x-6");
    document.getElementById("nav-line-out-side-1").classList.toggle("translate-x-6");
}
// nav color
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
      nav.classList.add('bg-white');
      nav.classList.remove('top-[65px]');
      nav.classList.add('top-0');
    } else {
      nav.classList.remove('bg-white');
      nav.classList.add('top-[65px]');
    }
  });
// businesses-generate-slider 
$('.businesses-generate-slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
        infinite: true,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1
      }
    },
  ]
});
// footer slider 
$('.footer-slider').slick({
  dots: false,
  speed : 2000,
  infinite: true,
  slidesToShow: 8,
  slidesToScroll: 1,
  nextArrow : '.next',
  prevArrow : '.prev',
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase : 'linear' , 
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
  ]
});