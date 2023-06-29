const body = document.querySelector("body");
const html = document.querySelector("html");

const friendsOverlay = document.querySelector(".friends-overlay");
(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const logo = document.querySelector(".logo-mobile");
  const containerIsOpen = document.querySelector(".open");
  const overlay = document.querySelector(".overlay");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
    logo.classList.toggle("is-open");
    body.classList.toggle("is-open");
    html.classList.toggle("is-open");
    mobileMenuRef.classList.toggle("is-open");
    containerIsOpen.classList.toggle("is-open");
    overlay.classList.toggle("is-open");
  });

  overlay.addEventListener("click", () => {
    mobileMenuRef.classList.remove("is-open");
    headerMenu.classList.remove("is-open");
    containerIsOpen.classList.remove("is-open");
    overlay.classList.remove("is-open");
    body.classList.remove("is-open");
    html.classList.remove("is-open");
  });
})();
