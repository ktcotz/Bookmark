type FeaturesPossibility = 0 | 1 | 2;

export class Features {
  private ACTIVE_FEATURE_MODIFIER = "btn--active";

  private parentElement = document.querySelector<HTMLDivElement>(".features");
  private featuresButtons =
    document.querySelectorAll<HTMLButtonElement>(".btn--features");
  private currentFeature: FeaturesPossibility = 0;
  private features = features_data;

  private contentDOM = {
    image: document.querySelector<HTMLImageElement>(".features__image"),
    title: document.querySelector<HTMLHeadingElement>(".features__title"),
    desription: document.querySelector<HTMLParagraphElement>(".features__text"),
  };

  initialize() {
    this.addEventListeners();
  }

  private isValidFeatureValue(value: number): value is FeaturesPossibility {
    return value >= 0 && value <= this.features.length;
  }

  private removeAllFeaturesFromActive() {
    this.featuresButtons.forEach((button) =>
      button?.classList.remove(this.ACTIVE_FEATURE_MODIFIER)
    );
  }

  private addActiveFeature() {
    this.featuresButtons[this.currentFeature]?.classList.add(
      this.ACTIVE_FEATURE_MODIFIER
    );
  }

  private changeCurrentFeature(target: HTMLButtonElement) {
    const currentTargetValue = Number(target.dataset.value);

    if (currentTargetValue === null) return;

    if (this.isValidFeatureValue(currentTargetValue)) {
      this.currentFeature = currentTargetValue;
      this.addActiveFeature();
      this.renderFeature();
    }
  }

  private addEventListeners() {
    this.parentElement?.addEventListener("click", (ev) => {
      if (!ev.target) return;

      if (!(ev.target instanceof HTMLButtonElement)) return;

      this.removeAllFeaturesFromActive();

      this.changeCurrentFeature(ev.target);
    });
  }

  private renderFeature() {
    const feature = this.features[this.currentFeature];

    if (!this.contentDOM.image) return;

    this.contentDOM.image.setAttribute("src", feature.image_url);

    if (!this.contentDOM.title) return;

    this.contentDOM.title.textContent = feature.title;

    if (!this.contentDOM.desription) return;

    this.contentDOM.desription.textContent = feature.description;
  }
}

const features_data = [
  {
    image_url: "./src/assets/images/illustration-features-tab-1.svg",
    title: "Bookmark in one click",
    description:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites. ",
  },
  {
    image_url: "./src/assets/images/illustration-features-tab-2.svg",
    title: " Intelligent search",
    description:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks. ",
  },
  {
    image_url: "./src/assets/images/illustration-features-tab-3.svg",
    title: "Share your bookmarks",
    description:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button. ",
  },
];
