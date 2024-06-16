const MOBILE_SIZE = 42;
const navigation = document.querySelector(".navigation");
const hamburgerButton = document.querySelector(".btn--hamburger");
const hamburgerIcon = document.querySelector(".btn__image");

const openMenu = () => {
  navigation?.classList.toggle("navigation--mobile");

  toggleButtonState();
};

const toggleButtonState = () => {
  const isOpen = navigation?.classList.contains("navigation--mobile");

  hamburgerButton?.setAttribute(
    "aria-label",
    `${isOpen ? "Close" : "Open"} navigation`
  );

  hamburgerIcon?.setAttribute(
    "src",
    `./src/assets/images/icon-${isOpen ? "close" : "hamburger"}.svg`
  );
};

hamburgerButton?.addEventListener("click", openMenu);

window.addEventListener("resize", () => {
  if (window.matchMedia(`(min-width:${MOBILE_SIZE}rem)`).matches) {
    navigation?.classList.remove("navigation--mobile");
    toggleButtonState();
  }
});
