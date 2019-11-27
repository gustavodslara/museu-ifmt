function  splitScroll(){
  const controller =  new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    triggerElement: ".title",
      duration: "200%",      
      triggerHook: 0
  })
  .setPin(".title")

  .addTo(controller);
}

splitScroll();