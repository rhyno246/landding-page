if($(window).innerWidth() > 1024){
    gsap.from('.nav-right', 1 , {
      duration: 2.5,
      delay : .25,
      opacity : 0,
      ease: "power2.out",
      y : 150,
    })
  }
  
  
  gsap.from('.logo-pc', 1 , {
    duration: 2.5,
    opacity : 0,
    delay : .15,
    ease: "power2.out",
    x : -95,
    y : 10
  })
  gsap.from('.menu li:nth-child(1)', 1 , {
    duration: 2.5,
    opacity : 0,
    delay : .25,
    ease: "power2.out",
    x : -95,
    y : 10
  })
  gsap.from('.menu li:nth-child(2)', 1 , {
    duration: 2.5,
    opacity : 0,
    delay : .35,
    ease: "power2.out",
    x : -95,
    y : 10
  })
  gsap.from('.menu li:nth-child(3)', 1 , {
    duration: 2.5,
    opacity : 0,
    delay : .45,
    ease: "power2.out",
    x : -95,
    y : 10
  })
  gsap.from('.menu li:nth-child(4)', 1 , {
    duration: 2.5,
    opacity : 0,
    delay : .55,
    ease: "power2.out",
    x : -95,
    y : 10
  })
  gsap.from('.menu li:nth-child(5)', 1 , {
    duration: 2.5,
    opacity : 0,
    delay : .65,
    ease: "power2.out",
    x : -95,
    y : 10
  })