import "./style/style.scss";
import { Features } from "./ts/Features";
import { Navigation } from "./ts/Navigation";

const init = () => {
  new Navigation().initialize();
  new Features().initialize();
};

init();
