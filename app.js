const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

// Animate it

function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline({});

tl.to(".page", {
  height: "0",
  duration: 0.9,
  stagger: 0.25,
});
tl.to(
  ".hero-text h2",
  {
    y: 0,
    opacity: 1,
    duration: 1.4,
  },
  "-=1"
);
tl.from(
  ".logo",
  {
    opacity: 0,
    y: -100,
    duration: 1.3,
  },
  "one"
);
tl.from(
  ".menu-actions",
  {
    y: -100,
    duration: 1.3,
    opacity: 0,
  },
  "one"
);

tl.to(
  ".hero-img .overlay",
  {
    width: "0%",
    duration: 1.2,
  },
  "-=0.8"
);
tl.from(".loving1", {
  opacity: 0,
});
gsap.to(".loving1", {
  scrollTrigger: {
    trigger: ".navbar",
    start: "top top", // when the top of the trigger hits the top of the viewport
    end: "+=1000", // end after scrolling 500px beyond the start
    scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  },
  x: -1000,
});
gsap.to(".footer-section", {
  scrollTrigger: {
    trigger: ".app-section",
    start: "top top",
    end: "bottom bottom", // end after scrolling 500px beyond the start
    scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  },
  width: "96%",
  borderRadius: "12px",
});
