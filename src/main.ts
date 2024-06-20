import "./style/style.scss";
import { Features } from "./ts/features";
import { Navigation } from "./ts/navigation";

const init = () => {
  new Navigation().initialize();
  new Features().initialize();
};

init();
