const btn = document.getElementById('btnPlay')
const btnR = document.getElementById('btnReplay')
const tl = gsap.timeline()

tl.to('.wrapper-container-img', {
    transform: "rotateX(0)",
    duration: 2.5,
    stagger: 0.15,
    ease: "elastic.out(1, 0.3)",
}).pause()

btn.addEventListener('click', ()=>{
    tl.play()
})
btnR.addEventListener('click', ()=>{
    tl.restart()
})
