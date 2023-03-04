let main = document.querySelector(".main");
let key = false;
let dot = document.querySelector(".dot");
let art = document.querySelector(".art");

// main.addEventListener("mousedown", () => {
//   key = true;
// });

window.addEventListener("mouseup", () => {
  key = false;
  dot.style.display = "block";
});

dot.addEventListener("mousedown", (e) => {
  creatDot(e);
  key = true;
  dot.style.display = "none";
});

window.addEventListener("mousemove", (e) => {
  dot.style.left = e.pageX + "px";
  dot.style.top = e.pageY + "px";
  if (key) {
    creatDot(e);
  }
});

let creatDot = (e) => {
  art.innerHTML += `<div class="point"></div>`;
  art.lastChild.style.left = e.pageX + "px";
  art.lastChild.style.top = e.pageY + "px";
  art.lastChild.style.width = dot.style.width;
  art.lastChild.style.height = dot.style.height;
  art.lastChild.style.backgroundColor = dot.style.backgroundColor;
};

//#region size
let size = document.querySelectorAll(".sz");
size[1].classList.add("size_color");

size.forEach((sz) => {
  sz.addEventListener("click", () => {
    size.forEach((sz) => sz.classList.remove("size_color"));
    sz.classList.add("size_color");
  });
});

document.querySelector(".sml").addEventListener("click", () => {
  dot.style.width = "15px";
  dot.style.height = "15px";
});
document.querySelector(".med").addEventListener("click", () => {
  dot.style.width = "35px";
  dot.style.height = "35px";
});
document.querySelector(".big").addEventListener("click", () => {
  dot.style.width = "60px";
  dot.style.height = "60px";
});
//#endregion

//#region color
let colors = document.querySelectorAll(".color");
colors[0].classList.add("add_color");

colors.forEach((color) => {
  color.addEventListener("click", () => {
    pens.forEach((pen) => pen.classList.remove("add_pen"));
    pens[0].classList.add("add_pen");
    colors.forEach((color) => color.classList.remove("add_color"));
    color.classList.add("add_color");
  });
});

let saveColor;
document.querySelector(".color0").addEventListener("click", () => {
  saveColor = "#403f42";
  dot.style.backgroundColor = saveColor;
});

document.querySelector(".color1").addEventListener("click", () => {
  saveColor = "#f25061";
  dot.style.backgroundColor = saveColor;
});
document.querySelector(".color2").addEventListener("click", () => {
  saveColor = "#a27951";
  dot.style.backgroundColor = saveColor;
});
document.querySelector(".color3").addEventListener("click", () => {
  saveColor = "#f47d41";
  dot.style.backgroundColor = saveColor;
});
document.querySelector(".color4").addEventListener("click", () => {
  saveColor = "#f7f54f";
  dot.style.backgroundColor = saveColor;
});
document.querySelector(".color5").addEventListener("click", () => {
  saveColor = "#72d03e";
  dot.style.backgroundColor = saveColor;
});
document.querySelector(".color6").addEventListener("click", () => {
  saveColor = "#51e7d8";
  dot.style.backgroundColor = saveColor;
});
document.querySelector(".color7").addEventListener("click", () => {
  saveColor = "#3cb5d9";
  dot.style.backgroundColor = saveColor;
});
document.querySelector(".color8").addEventListener("click", () => {
  saveColor = "#644aeb";
  dot.style.backgroundColor = saveColor;
});
document.querySelector(".color9").addEventListener("click", () => {
  saveColor = "#e779f8";
  dot.style.backgroundColor = saveColor;
});
//#endregion

//#region pens
let pens = document.querySelectorAll(".pen");
pens[0].classList.add("add_pen");

pens.forEach((pen) => {
  pen.addEventListener("click", () => {
    pens.forEach((pen) => pen.classList.remove("add_pen"));
    pen.classList.add("add_pen");
  });
});

let draw = document.querySelector(".draw");
draw.addEventListener("click", () => {
  dot.style.backgroundColor = saveColor;
});

let rub = document.querySelector(".rub");
rub.addEventListener("click", () => {
  dot.style.backgroundColor = "#ffffff";
});

let bomb = document.querySelector(".bomb");
bomb.addEventListener("click", () => {
  art.innerHTML = "";
});
//#endregion
