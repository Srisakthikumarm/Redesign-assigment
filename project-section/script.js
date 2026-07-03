const marquee = document.getElementById("marquee");
const track = document.getElementById("track");

track.innerHTML += track.innerHTML;

let x = 0;
let speed = 0.6;
let targetSpeed = 0.6;
let width = 0;

function updateWidth() {
  width = track.scrollWidth / 2;
}

function loop() {
  speed += (targetSpeed - speed) * 0.08;
  x -= speed;

  if (width && Math.abs(x) >= width) {
    x = 0;
  }

  track.style.transform = `translateX(${x}px)`;
  requestAnimationFrame(loop);
}

marquee.addEventListener("mouseenter", () => {
  targetSpeed = 0.2;
});

marquee.addEventListener("mouseleave", () => {
  targetSpeed = 0.6;
});

window.addEventListener("resize", updateWidth);

updateWidth();
loop();
