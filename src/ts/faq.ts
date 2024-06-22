export class Faq {
  private FAQ_OPEN_MODIFIER = "faq__item--active";
  private faqOpenButtons =
    document.querySelectorAll<HTMLButtonElement>(".btn--faq");
  private allFaqs = document.querySelectorAll(".faq__item");

  private currentOpenFaq: string | null = null;

  initialize() {
    this.addEventListeners();
  }

  private toggleActiveFaq() {
    this.allFaqs.forEach((faq) => {
      const content = faq.querySelector(".faq__content");

      if (!content) return;

      if (content.id === this.currentOpenFaq) {
        faq.classList.add(this.FAQ_OPEN_MODIFIER);
      } else {
        faq.classList.remove(this.FAQ_OPEN_MODIFIER);
      }
    });
  }

  private handleActiveFaq(button: HTMLButtonElement) {
    const controlFaq = button.getAttribute("aria-controls");

    this.currentOpenFaq =
      this.currentOpenFaq === controlFaq ? null : controlFaq;

    this.toggleActiveFaq();
  }

  private disexpandedAlLButtons() {
    this.faqOpenButtons.forEach((button) => {
      button.setAttribute("aria-expanded", "false");
    });
  }

  private handleButtonActiveState(button: HTMLButtonElement) {
    this.disexpandedAlLButtons();

    button.setAttribute(
      "aria-expanded",
      `${Boolean(this.currentOpenFaq) ? "true" : "false"}`
    );
  }

  private addEventListeners() {
    this.faqOpenButtons.forEach((button) => {
      button.addEventListener("click", () => {
        this.handleActiveFaq(button);
        this.handleButtonActiveState(button);
      });
    });
  }
}
