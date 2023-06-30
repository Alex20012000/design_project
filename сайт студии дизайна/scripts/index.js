const slides = [
  {
    src: "../static/images/image_2.1.png",
    city: "Rostov-on-Don<br>LCD admiral",
    apartmentAria: "81 m2",
    repairTime: "3.5 months",
    repairConst: "Upon request",
  },
  {
    src: "../static/images/image_2.png",
    city: "Sochi<br>Thieves",
    apartmentAria: "105 m2",
    repairTime: "4 months",
    repairConst: "Upon request",
  },
  {
    src: "../static/images/image_2.2.jpg",
    city: "Rostov-on-Don<br>Patriotic",
    apartmentAria: "93 m2",
    repairTime: "3 months",
    repairConst: "Upon request",
  },
];

const text = document.querySelectorAll(".projects-info-text");
console.log(text);

function updaiteText(id) {
    text[0].innerHTML = slides[id].city;
    text[1].innerHTML = slides[id].apartmentAria;
    text[2].innerHTML = slides[id].repairTime;
    text[3].innerHTML = slides[id].repairConst;
}
updaiteText(0)
const image = document.querySelector(".project-image-area");
let index = 0;
function chengeSlide(id) {
  image.style.backgroundImage = "url(" + slides[id].src + ")";
  index = id;
  updaitedots();
  updaiteLinks();
  updaiteText(id);
}

const arrowRight = document.querySelector(".arrow-button-right");
function testLog() {
  console.log("clik");
}
arrowRight.addEventListener("click", function () {
  if (index === slides.length - 1) {
    index = 0;
  } else {
    index = index + 1;
  }
  chengeSlide(index);
});

const arrowLeft = document.querySelector(".arrow-button-left");
function testLog() {
  console.log("clik");
}
arrowLeft.addEventListener("click", function () {
  if (index === 0) {
    index = slides.length - 1;
  } else {
    index = index - 1;
  }
  chengeSlide(index);
});

const dots = document.querySelectorAll(".dot-button");

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function () {
    chengeSlide(i);
  });
}
function updaiteLinks() {
  for (let i = 0; i < links.length; i++) {
    if (index === i) {
      links[i].classList.add("project-link-active");
    } else {
      links[i].classList.remove("project-link-active");
    }
  }
}

links = document.querySelectorAll(".project-link");
function testLog() {
  console.log("clik");
}
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    chengeSlide(i);
  });
}
function updaitedots() {
  for (let i = 0; i < links.length; i++) {
    if (index === i) {
      dots[i].classList.add("dot-button-active");
    } else {
      dots[i].classList.remove("dot-button-active");
    }
  }
}
