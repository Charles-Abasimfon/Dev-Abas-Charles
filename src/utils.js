export function initCursor() {
  let mouseX = window.innerWidth / 2,
    mouseY = window.innerHeight / 2;

  let cursor = {
    el: document.querySelector(".cursor"),
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    w: 30,
    h: 30,
    update: function () {
      let l = this.x - this.w / 2;
      let t = this.y - this.h / 2;
      this.el.style.transform = "translate3d(" + l + "px," + t + "px, 0)";
    },
  };

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const link = document.querySelectorAll(
    "a, .swiper-pagination, .swiper-button-prev, .swiper-button-next, button, .button, .btn, .lnk"
  );
  link.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      cursor.el.classList.add("cursor-zoom");
    });
    link.addEventListener("mouseleave", () => {
      cursor.el.classList.remove("cursor-zoom");
    });
  });

  setInterval(move, 1000 / 60);
  function move() {
    cursor.x = lerp(cursor.x, mouseX, 0.1);
    cursor.y = lerp(cursor.y, mouseY, 0.1);
    cursor.update();
  }
  function lerp(start, end, amt) {
    return (1 - amt) * start + amt * end;
  }
}

export const stickyNav = () => {
  let offset = window.scrollY;
  const sticky = document.querySelectorAll(".header");
  sticky.forEach((sticky) => {
    if (sticky) {
      if (offset > 100) {
        sticky.classList.add("animate-in", "sticky");
      } else {
        // sticky.classList.add("animate-out");
        sticky.classList.remove("animate-in", "sticky");
        // setTimeout(() => {
        //   sticky.classList.remove("animate-out");
        // }, 500);
      }
    }
  });
};

export const animation = () => {
  if (typeof window !== "undefined") {
    window.WOW = require("wowjs");
  }
  new WOW.WOW().init();
};

// jarallax
export const parallax = () => {
  const section = document.querySelectorAll(".section");
  section.forEach((element, i) => {
    setTimeout(() => {
      const div = document.createElement("div");
      const div2 = document.createElement("div");
      div.classList.add("pbefore");
      div2.classList.add("pafter");
      element.appendChild(div);
      element.appendChild(div2);
      let { jarallax, jarallaxVideo } = require("jarallax");
      jarallaxVideo();
      jarallax(document.querySelectorAll(`.section .pbefore`), {
        speed: 0.85,
        keepImg: true,
        automaticResize: true,
        videoVolume: 0,
      });
      jarallax(document.querySelectorAll(`.section .pafter`), {
        speed: 0.85,
        keepImg: true,
        automaticResize: true,
        videoVolume: 0,
      });
      jarallax(document.querySelectorAll(`.js-parallax`), {
        speed: 0.65,
        type: "scroll",
      });
    }, 200);
  });
};

export const splittingText = () => {
  const texts = document.querySelectorAll(
    ".splitting-text-anim-2,.splitting-text-anim-1"
  );
  texts.forEach((text) => {
    if (text.classList.contains("subtitle")) {
      text.classList.add(
        "word",
        "chars",
        "splitting",
        "animate__active",
        "animate__animated"
      );
    }
    const innerText = text.innerHTML;
    const splitText = innerText.split("");
    const span = document.createElement("span");
    span.classList.add("word");
    splitText.forEach((element, i) => {
      const childSpan = document.createElement("span");
      span.appendChild(childSpan);
      childSpan.innerText = element;
      childSpan.classList.add("char");
      childSpan.classList.add(`char-index-${i}`);
    });
    text.innerHTML = span.outerHTML;
  });
};
