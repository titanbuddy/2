const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

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
let tl = gsap.timeline({
  delay: 1,
});

tl.to(".page", {
  height: "0",
  duration: 0.7,
  stagger: 0.35,
  onComplete: () =>
    document.querySelector("body").classList.remove("is-loading"),
});
tl.from(
  ".logo",
  {
    opacity: 0,
    x: 100,
  },
  "-=0.2"
);
tl.from(
  ".menu-actions",
  {
    x: -100,
    opacity: 0,
  },
  "-=0.2"
);
tl.to(
  ".hero-text h2",
  {
    y: 0,
  },
  "-=0.5"
);
tl.from(".hero-img img", {
  y: "150%",
  opacity: 0,
  duration: 1.2,
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
