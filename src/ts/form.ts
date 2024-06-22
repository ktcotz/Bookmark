import z, { ZodError } from "zod";

const validEmailSchema = z
  .string()
  .min(1, { message: "Email is required!" })
  .email("Enter valid email!");

export class Form {
  private SUCCESSFULLY_TIMES_OUT = 1000;
  private parentElement = document.querySelector(".form");
  private emailInput = document.querySelector<HTMLInputElement>(".form__input");
  private formButton = document.querySelector<HTMLButtonElement>(".form__btn");
  private errorElement =
    document.querySelector<HTMLParagraphElement>(".form__error");

  initialize() {
    this.addEventListeners();
  }

  private clearInput() {
    if (!this.emailInput) return;

    this.emailInput.value = "";
  }

  private showError(message: string) {
    if (!this.errorElement || !this.parentElement) return;

    this.parentElement.classList.add("form--error");
    this.errorElement.textContent = message;
  }

  private clearError() {
    if (!this.errorElement || !this.parentElement) return;

    this.parentElement.classList.remove("form--error");
    this.errorElement.textContent = "";
  }

  private sendMail() {
    if (!this.emailInput || !this.formButton) return;

    this.clearError();

    const emailInputValue = this.emailInput.value;

    try {
      validEmailSchema.parse(emailInputValue);

      this.formButton.textContent = "Sended!";
      this.formButton.classList.add("btn--sended");

      setTimeout(() => {
        this.formButton.textContent = "Contact us";
        this.formButton.classList.remove("btn--sended");

        this.clearInput();
      }, this.SUCCESSFULLY_TIMES_OUT);
    } catch (err: unknown) {
      if (err instanceof ZodError) {
        const message = err.issues.map((issue) => issue.message).join("\n");

        this.showError(message);
      }
    }
  }

  private addEventListeners() {
    this.parentElement?.addEventListener("submit", (ev) => {
      ev.preventDefault();

      this.sendMail();
    });
  }
}
