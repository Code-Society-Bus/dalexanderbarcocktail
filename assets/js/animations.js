var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    triggerHook: 0.9, // show, when scrolled 10% into view

})  
.setClassToggle(".animate-icon", "active") // add class toggle
.addTo(controller); // assign the scene to the controller

new ScrollMagic.Scene({
    triggerElement: "#trigger2",
    triggerHook: 0.9, // show, when scrolled 10% into view

})  
.setClassToggle(".animate-icon", "active") // add class toggle
.addTo(controller); // assign the scene to the controller