// import { createGlobalStyle } from "styled-components";
// const GlobalStyle = createGlobalStyle`

const textElement = document.getElementById("text");
const cursorElement = document.getElementById("cursor");
const text = "Lore Schwartz";
let index = 0;

function typeText() {
  if (index < text.length) {
    setTimeout(function () {
      textElement.textContent += text.charAt(index);
      index++;
      typeText();
    }, Math.random() * 25 + 120);
  } else {
    cursorElement.classList.add("blink");
  }
}

typeText();
