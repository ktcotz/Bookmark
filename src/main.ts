import "./style/style.scss";
import { Faq } from "./ts/faq";
import { Features } from "./ts/features";
import { Navigation } from "./ts/navigation";

const init = () => {
  new Navigation().initialize();
  new Features().initialize();
  new Faq().initialize();
};

init();
