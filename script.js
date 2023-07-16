const linksContainer = document.querySelector(".navigation-links")
const menuBtn = document.querySelector(".menu-btn")

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("fa-xmark")
  linksContainer.classList.toggle("not-active")
  const body = document.body;
  if (body.style.overflow === 'hidden') {
    body.style.overflow = '';
  } else {
    body.style.overflow = 'hidden';
  }
})
