const marquee = document.getElementById("marquee");
const track = document.getElementById("track");
const cardCount = track.children.length;

track.innerHTML += track.innerHTML;

let x = 0;
let speed = 40;
let targetSpeed = 40;
let width = 0;
let lastTime = 0;

function updateWidth() {
  width = track.children[cardCount].offsetLeft;
}

function loop(time) {
  if (!lastTime) {
    lastTime = time;
  }

  let seconds = Math.min((time - lastTime) / 1000, 0.04);
  lastTime = time;

  let smooth = Math.min(seconds * 8, 1);
  speed += (targetSpeed - speed) * smooth;
  x -= speed * seconds;

  if (width && Math.abs(x) >= width) {
    x += width;
  }

  track.style.transform = `translate3d(${x}px, 0, 0)`;
  requestAnimationFrame(loop);
}

marquee.addEventListener("mouseenter", () => {
  targetSpeed = 14;
});

marquee.addEventListener("mouseleave", () => {
  targetSpeed = 40;
});

window.addEventListener("resize", updateWidth);
window.addEventListener("load", updateWidth);

updateWidth();
requestAnimationFrame(loop);
