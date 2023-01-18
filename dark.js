
const dark = document.getElementById("dark");
const body = document.body;
let theme;

dark.addEventListener("click", () => {
  body.classList.toggle("darkBody");
  if (body.classList.contains("darkBody")) {
    theme = localStorage.setItem("theme", 1);
  } else {
    theme = localStorage.setItem("theme", 0);
  }
});

if (
  localStorage.getItem("theme") == 1 &&
  !body.classList.contains("darkBody")
) {
  body.classList.add("darkBody");
}