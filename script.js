const text = "Hana Solomon";
const element = document.getElementById("typed-text");
let i = 0;

function typeWriter() {
  if (i < text.length) {
    element.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 150);
  }
}

window.addEventListener("DOMContentLoaded", typeWriter);
