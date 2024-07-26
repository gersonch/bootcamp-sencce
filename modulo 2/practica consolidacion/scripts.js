const btn = document.getElementById("btn");

const moon = document.getElementById("moon");
const sun = document.getElementById("sun");
const all = document.querySelector(".all");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  alert("¡Mensaje enviado con exito!");
});

//modo oscuro

moon.addEventListener("click", () => {
  all.classList.add("bg-dark");
  all.classList.add("text-light");
  moon.classList.add("d-none");
  sun.classList.add("d-flex");

  sun.addEventListener("click", () => {
    all.classList.remove("bg-dark");
    all.classList.remove("text-light");
    moon.classList.remove("d-none");
    sun.classList.remove("d-flex");
  });
});
