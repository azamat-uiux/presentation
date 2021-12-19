const controller = new ScrollMagic.Controller();
const slides = document.querySelectorAll(".slide");
const header = document.querySelector(".header");

slides.forEach((slide) => {
	const revealImage = slide.querySelector(".slide-img-reveal");
	const img = slide.querySelector("img");
	const revealText = slide.querySelector(".slide-text-reveal");

	// gsap.to(revealImage, 1, {x: "100%", scale: 0.5})

	const options = { defaults: { duration: 1, ease: "power2.inOut" } }
	const timeline = gsap.timeline(options);

	timeline.fromTo(revealImage, {x: "0%"}, {x: "100%"});
	timeline.fromTo(img, {scale: 3}, {scale: 1}, "-=1");
	timeline.fromTo(revealText, {x: "0%"}, {x: "-100%"}, "-=0.5");
	timeline.fromTo(header, {opacity: 0}, {opacity: 1})
})

document.querySelector(".menu").addEventListener("click", animateMenu)

function animateMenu(event) {
	if (!event.target.classList.contains("active")) {
		event.target.classList.add("active")
		gsap.to(".line1", 0.5, {rotate: '45', y: 5, background: "#000"})
		gsap.to(".line2", 0.5, {rotate: '-45', y: -5, background: "#000"})
		gsap.to(".navbar", 1, {clipPath: "circle(2500px at 100% -10%)"})
		gsap.to(".logo", 1, {color: "#000"})
		document.body.classList.add("no-scroll")
	} else {
		event.target.classList.remove("active")
		gsap.to(".line1", 0.5, {rotate: 0, y: 0, background: "#fff"})
		gsap.to(".line2", 0.5, {rotate: 0, y: 0, background: "#fff"})
		gsap.to(".navbar", 1, {clipPath: "circle(50px at 100% -10%)"})
		gsap.to(".logo", 1, {color: "#fff"})
		document.body.classList.remove("no-scroll")
	}
}