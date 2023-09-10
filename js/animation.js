import { myfunction } from "./mylibrary.js";
let obj = new myfunction();
let name = obj.select("#name");
// import  *  from "anime.min.jsvar elements = document.querySelectorAll('.dom-node-demo .el');
let nav = document.querySelector("#aaa");
anime({
  targets: nav,
  translateY: 80,
  easing: "easeInOutQuad",
  opacity: {
    value: 1,
    delay: 500,
  },
  duration: 100,
});

anime({
  targets: name,
  translateY: 20,
  // endDelay:3000,
  opacity: 1,
  // easing:'easeInOutElastic'
  delay: 500,
  loop: false,
  // duration:1000
});
export class animation {
  aboutme() {
    return anime({
      targets: obj.select("#aboutme"),
      translateY: -40,
      opacity: {
        value: 1,
        duration: 100,
      },
      duration: 100,
    });
  }

  textanimation() {
    return anime({
      targets: obj.select("#text"),
      translateY: -40,
      opacity: {
        value: 1,
        duration: 100,
      },
      duration: 100,
    });
  }
  skillsanimation() {
    return anime({
      targets: obj.select("#skills"),
      translateY: -40,
      opacity: {
        value: 1,
        duration: 100,
      },
      duration: 100,
    });
  }
  animation1() {
    return anime({
      targets: obj.select("#massage1"),
      opacity: {
        value: 1,
        duration: 100,
      },
      duration: 100,
    });
  }
  animation2() {
    return anime({
      targets: obj.select("#label1"),

      opacity: {
        value: 1,
        duration: 100,
      },
      duration: 100,
    });
  }
  animation3() {
    return anime({
      targets: obj.select("#a1"),

      opacity: {
        value: 1,
        duration: 100,
      },
      duration: 100,
    });
  }
  animation4() {
    return anime({
      targets: obj.select("#a2"),

      opacity: {
        value: 1,
        duration: 100,
      },
      duration: 100,
    });
  }
  animation5() {
    return anime({
      targets: obj.select("#a3"),
      opacity: {
        value: 1,
        duration: 100,
      },
      duration: 100,
    });
  }
  animation6() {
    return anime({
      targets: obj.select("#a4"),
      opacity: {
        value: 1,
        duration: 100,
      },
      duration: 100,
    });
  }
  section3animation() {
    return anime({
      targets: obj.select("#section3bg"),

      opacity: {
        value: 0.8,
        duration: 100,
      },
    });
  }

  projectanimation() {
    return anime({
      targets: obj.select("#project_text"),
      translateX: {
        value: 30,

        duration: 200,
      },
      opacity: 1,
      duration: 100,
      loop: false,
    });
  }
  anim1() {
    return anime({
      targets: [
        obj.select("#proj1"),
        obj.select("#proj2"),
        obj.select("#proj3"),
      ],
      translateX: {
        value: -150,
        duration: 300,
      },
      // right:0,
      opacity: 1,
      delay: 300,
      duration: 100,
    });
  }

  contentAnimation() {
    return anime({
      targets: obj.select("#social_media"),
      translateY: {
        value: -30,

        duration: 140,
      },
      opacity: 1,
    });
  }
}
