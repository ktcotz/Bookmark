import "./style/style.scss";
import { Navigation } from "./ts/navigation";

const init = () => {
  new Navigation().initialize();
};

init();
