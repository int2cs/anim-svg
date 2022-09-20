gsap.config({
    force3D: true
})
const tl = gsap.timeline()

tl.to('.wrapper-container-img', {
    transform: "rotateX(0)",
    duration: 3,
    stagger: 0.1,
    ease: "elastic.out(1, 0.3)",
})
