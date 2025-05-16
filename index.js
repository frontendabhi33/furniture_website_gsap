gsap.fromTo('#title', {
      scale:5.2,  
      y: -180
    },{
      scale: 1,
      duration: 1,
      y: 0,
      scrollTrigger: {
        trigger: '#title',
        end: 'bottom top',
        invalidateOnRefresh: true,
        scrub: 2,
        ease: 'expoScale(0,5,7,none)'
      }
    })

// Discover Slide Animations 

const discover_tl = gsap.timeline({
   scrollTrigger: {
    trigger: ".slide",
    start: 'top 20%',
    scrub: 2,
    ease:'ease'
   }
})

discover_tl.to(".slide1", {
    y: 220,
});

discover_tl.to(".slide2", {
    y: 220,
});

discover_tl.to(".slide3", {
    y: 220,
});

discover_tl.to(".slide4", {
    y: 220,
});

gsap.to("#img_section2", {
    clipPath: "circle(100% at 50% 50%)",
    scrollTrigger: {
        trigger: '#image-section > .container',
        start: 'top 10%',
        end: 'bottom bottom',
        scrub: 2,
        pin: true,
        onEnter: () => {
            document.body.classList.add("dark-theme")
        },
        onLeaveBack: () => {
            document.body.classList.remove("dark-theme")

        }
    }
})