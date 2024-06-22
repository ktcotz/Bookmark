import "./style/style.scss";
import { Faq } from "./ts/faq";
import { Features } from "./ts/features";
import { Form } from "./ts/form";
import { Navigation } from "./ts/navigation";

const init = () => {
  new Navigation().initialize();
  new Features().initialize();
  new Faq().initialize();
  new Form().initialize();
};

init();
