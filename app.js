// DOM Selectors
const intro = document.querySelector('.intro'); // Select the intro class 
const video = intro.querySelector('video'); // Select the video tag inside the intro class
const text = intro.querySelector('h1'); // Select the h1 tag inside the intro class

// ScrollMagic Animation
const controller = new ScrollMagic.Controller(); // Initialize the Scroll Magic controller

// Animating the Scene within a screen
let scene = new ScrollMagic.Scene({
    duration: 4000, // After how many pixels should the animation end
    triggerElement: intro,
    triggerHook: 0,
})
.setPin(intro) // To keep the video at its place
.addTo(controller); // Add this scene to the controller

// Animatign the video
let accelamount = 0.1; // This will allow to chnage the frame rate of the video while scrolling
let scrollPos = 0;
let delay = 0;

// Function to enable the scroll animation
scene.on('update', e => {
    scrollPos = e.scrollPos / 1000; // When this event takes place we will have access to scroll Position (in seconds)
})

setInterval(() => {
    delay += (scrollPos - delay) * accelamount; // We add delay to animation for making it realistic and speed it up by 0.1
    video.currentTime = delay;
}, 33.3); // This will run for 3.3 Miliseconds
