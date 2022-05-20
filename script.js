var character = document.getElementById("character");
var block = document.getElementById("block");
var Max_score = document.getElementById("mscore");
var counter = 0;
var max_score = 0;
function jump() {
  if (character.classList == "animate") {
    return;
  }
  character.classList.add("animate");
  setTimeout(function () {
    character.classList.remove("animate");
  }, 500);
}

var checkDead = setInterval(function () {
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
    block.classList.remove("active");
    if (max_score < Math.floor(counter / 100)) {
      max_score = Math.floor(counter / 100);
      Max_score.value = Math.floor(counter / 100);
    }
    alert("Game Over. score: " + Math.floor(counter / 100));
    counter = 0;
    block.classList.add("active");
  } else {
    if (block.classList.contains("active")) counter++;
    document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
  }
}, 10);

const start = document.getElementById("start");
const stop = document.getElementById("stop");

stop.addEventListener("click", () => {
  block.classList.remove("active");
});

start.addEventListener("click", () => {
  block.classList.add("active");
});

var load = 0;

const L = document.getElementById("loading");
const Screen = document.getElementById("container");

var loading = setInterval(() => {
  if (load <= 99) {
    console.log(load);
    load++;
    L.innerHTML = `Loading ${load}%`;
    Screen.style.opacity = `${(1 - (100 - load) / load) * 1}`;
  }
  if (load == 100) L.style.opacity = 0;
}, 10);
