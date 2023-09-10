import { animation } from "./animation.js";
let ani = new animation();
class my_functions {
  scroll() {
    document.addEventListener("scroll", () => {
      if (scrollY > 102) {
        document.querySelector("nav").classList.add("fixed");
      } else if (scrollY < 102) {
        document.querySelector("nav").classList.remove("fixed");
      }
      if (scrollY > 600) {
        document.querySelector("#bghtml").classList.add("bg-animation-html");
        document.querySelector("#bgcss").classList.add("bg-animation-css");
        document.querySelector("#bgjs").classList.add("bg-animation-js");
        document
          .querySelector("#bgbootstrap")
          .classList.add("bg-animation-bootstrap");
        document.querySelector("#bgvue").classList.add("bg-animation-vue");
      } else if (scrollY < 600) {
        document.querySelector("#bghtml").classList.remove("bg-animation-html");
        document.querySelector("#bgcss").classList.remove("bg-animation-css");

        document.querySelector("#bgjs").classList.remove("bg-animation-js");
        document
          .querySelector("#bgbootstrap")
          .classList.remove("bg-animation-bootstrap");
        document.querySelector("#bgvue").classList.remove("bg-animation-vue");
      }
      if (scrollY > 370) {
        ani.aboutme();
      }
      if (scrollY > 570) {
        ani.textanimation();
      }
      if (scrollY > 670) {
        ani.skillsanimation();
      }
      if (scrollY > 1670) {
        ani.section3animation();
      }

      if (scrollY > 1000) {
        document
          .querySelector(
            "#setction_1 > div.bg.text-center.text-black.py-5 > img"
          )
          .setAttribute("src", "./assets/img2.jpg");
      }
      if (scrollY < 1000) {
        document
          .querySelector(
            "#setction_1 > div.bg.text-center.text-black.py-5 > img"
          )
          .setAttribute("src", "./assets/img6.jpg");
      }

      if (scrollY > 2400) {
        document.querySelector(".section4 > .box").classList.add("box1");
      }

      if (scrollY > 2800) {
        ani.projectanimation();
        ani.anim1();
      }
      if (scrollY > 3900) {
        ani.contentAnimation();
      }
    });
  }
}

let arr = [
  ["W", "e", "b", " ", "D", "e", "v", "e", "l", "o", "p", "p", "e", "r"],
  [
    "F",
    "r",
    "o",
    "n",
    "t",
    "e",
    "n",
    "d",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "p",
    "e",
    "r",
  ],
  [
    "S",
    "o",
    "f",
    "t",
    " ",
    "w",
    "a",
    "r",
    "e",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "p",
    "e",
    "r",
  ],
];
let text = document.querySelector(".text");
let c = 0;
let spans;
let x = 0;
let t2 = undefined;

let obj = new my_functions();
obj.scroll();

function text_animation() {
  // debugger
  let t = setInterval(() => {
    text.innerHTML += '<span class="a">' + arr[x][c] + "</span>";
    c++;

    if (c == arr[x].length) {
      spans = document.querySelectorAll(".a");
      clearInterval(t);
      t2 = setInterval(() => {
        spans[c - 1].remove();
        c--;
        if (c == 0) {
          x++;
          c = 0;
          if (x == 3) {
            x = 0;
          }
          clearInterval(t2);
          text_animation();
        }
      }, 200);
    }
  }, 200);
}

text_animation();
