export class Navigation {
  private NAVIGATION_MODIFIER = "navigation--mobile";
  private DESKTOP_SIZE_VIEWPORT = `42rem`;
  private parentElement = document.querySelector<HTMLElement>(".navigation");
  private hamburgerButton =
    document.querySelector<HTMLButtonElement>(".btn--hamburger");
  private hamburgerButtonIcon =
    document.querySelector<HTMLImageElement>(".btn__image");

  initialize() {
    this.addEventListeners();
  }

  private isOpen() {
    return this.parentElement?.classList.contains(this.NAVIGATION_MODIFIER);
  }

  private openMenu() {
    this.parentElement?.classList.toggle(this.NAVIGATION_MODIFIER);
  }

  private toggleBurgerIcon() {
    const isOpen = this.isOpen();
    this.hamburgerButtonIcon?.setAttribute(
      "src",
      `./src/assets/images/icon-${isOpen ? "close" : "hamburger"}.svg`
    );
  }

  private toggleBurgerState() {
    const isOpen = this.isOpen();

    this.hamburgerButton?.setAttribute(
      "aria-label",
      `${isOpen ? "Close" : "Open"} navigation`
    );

    this.toggleBurgerIcon();
  }

  private addEventListeners() {
    this.hamburgerButton?.addEventListener("click", () => {
      this.openMenu();
      this.toggleBurgerState();
    });

    window.addEventListener("resize", () => {
      if (
        window.matchMedia(`(min-width:${this.DESKTOP_SIZE_VIEWPORT})`).matches
      ) {
        this.parentElement?.classList.remove(this.NAVIGATION_MODIFIER);
        this.toggleBurgerState();
      }
    });
  }
}
