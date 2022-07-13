const menuItems = document.querySelectorAll('.menu-tab')
document.querySelector('html').scrollIntoView({ 
    behavior: 'smooth' 
  });

menuItems.forEach( item => {
    item.addEventListener('click', () => {
        topFunction()
    })
})
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    // document.body.scrollTop = 0; // For Safari
    // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}