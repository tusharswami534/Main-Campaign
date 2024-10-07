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
    } else {
      nav.classList.remove('bg-white');
    }
  });
