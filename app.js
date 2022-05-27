const title = document.querySelector(".hello h1");
function handleTilteClick() {
  title.style.color = "blue";
}

function handleTitleMouseEnter() {
  title.innerText = "Mouse is here";
}

function handleMouseLeave() {
  title.innerText = "Mouse is gone";
}

title.addEventListener("click", handleTilteClick);
title.addEventListener("mouseenter", handleTitleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
