const navBtn = document.querySelectorAll(".nav-btn");

navBtn.forEach((btn) => {
  btn.addEventListener("click", handleMenu);
});

const navDialog = document.getElementById("nav-Dialog");

function handleMenu() {
  navDialog?.classList.toggle("hidden");
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navDialog?.classList.add("hidden");
  }
})


