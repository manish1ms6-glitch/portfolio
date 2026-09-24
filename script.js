const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuButton?.addEventListener("click", () => {
  const open = nav.style.display === "flex";
  nav.style.display = open ? "none" : "flex";
  nav.style.flexDirection = "column";
  nav.style.position = "absolute";
  nav.style.right = "24px";
  nav.style.top = "68px";
  nav.style.padding = "18px";
  nav.style.background = "#0d1b2d";
  nav.style.border = "1px solid rgba(255,255,255,.1)";
  nav.style.borderRadius = "12px";
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 800) nav.style.display = "none";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
