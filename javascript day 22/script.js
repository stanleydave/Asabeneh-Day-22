const header = document.querySelector("header");
header.style.textAlign = "center";
header.style.marginTop = "2rem";
const h3 = document.querySelector("h3");
h3.style.marginTop = "-1rem";
const p = document.querySelector("p");
p.style.textDecoration = "underline";
p.style.marginTop = "-1.5rem";
const div = document.querySelector(".container");
div.style.maxWidth = "800px";
div.style.height = "50vh";
div.style.display = "flex";
div.style.flexWrap = "wrap";
div.style.margin = "2rem auto";
// is prime
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
let title;
for (let i = 0; i <= 101; i++) {
  title = document.createElement("div");
  title.className = "title";
  title.style.fontSize = "3rem";
  title.textContent = i;
  title.style.color = "white";
  title.style.width = "3rem";
  title.style.padding = "1rem 2rem";
  title.style.display = "inline";
  title.style.margin = "3px";
  div.appendChild(title);

  if (isPrime(i)) title.style.backgroundColor = "red";
  else if (i % 2 === 1) title.style.backgroundColor = "yellow";
  else {
    title.style.backgroundColor = "green";
  }
}